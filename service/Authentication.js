const bcrypt = require('bcryptjs');
const Authenticaton = require('../model/Authentication');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    checkIfEmailVerified,
    delete: _delete 
};

 async function authenticate({ email, password }) {
    try {
        const auth = await Authenticaton.findByCredentials(email, password)
        if (auth) {
            const token = await auth.generateAuthToken()
            return { auth, token }
        }
        console.log('auth not found') 
        return {error: 'email or password is incorrect'}
    } catch (error) {

        return {error: error.message}
    }    
} 

/*  async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}  */

async function getAll() {
    return await Authenticaton.find().select('-hash');
}

async function getById(id) {
    return await Authenticaton.findById(id).select('-hash');
}

async function checkIfEmailVerified(email) {
   const auth = await Authenticaton.findOne({ email: email }); 
   console.log('auth',auth.userClaims.isEmailVerified);

   if (!auth) {

        return false; 

    }else{
        console.log(auth.userClaims.isEmailVerified);
       if(auth.userClaims.isEmailVerified){
            return true;
        }else{
           return false;
        }
    }
}

async function create(authParam) {
    // validate
    if (await Authenticaton.findOne({ email: authParam.email })) {
        throw 'email "' + authParam.email + '" is already taken';
    }

    const auth = new Authenticaton(authParam);

    // hash password
/*     if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    } */
    // save user
    await auth.save();
    const token = await auth.generateAuthToken()
        
    return { auth, token }  
}

async function update(id, authParam) {
    const auth = await Authenticaton.findById(id);

    // validate
    if (!auth) throw 'User not found';
    if (auth.email !== authParam.email && await Authenticaton.findOne({ email: authParam.email })) {
        throw 'email "' + authParam.email + '" is already taken';
    }

    // hash password if it was entered
    if (authParam.password) {
        authParam.password = bcrypt.hashSync(authParam.password, 10);
    }
    // copy userParam properties to user
    Object.assign(auth, authParam);

    await auth.save();
}

async function _delete(id) {
    await Authenticaton.findOneAndDelete(id);
}