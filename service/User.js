const User = require('../model/User');
const Authenticaton = require('../model/Authentication');
const Team = require('../model/Team');
const nodeMailer = require('../util/Mailer');

module.exports = {
    getAll,
    getById,
    create,
    update,
    reset,
    delete: _delete 
};
 
async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}
async function reset(userParam) {
    let response = {status:false,data:{}};
    const auth = await Authenticaton.findOne({ email: userParam.email }); 
    if(auth){
        
        const message = {
            from: 'tnicc.hq@gmail.com', // Sender address
            to: userParam.email,         // List of recipients
            subject: 'Password Reset | TNI', // Subject line
            html: `<h4>Hello,</h4>
            <h5>Someone, hopefully you, has requested to reset the password for your account</h5>
            
            <h5>If you did not perform this request, you can safely ignore this email.</h5>
            <h5>Otherwise, click the link below to complete the process.</h5>
            
            <a href="${userParam.resetLink}/${auth._id}">Reset Password</a>`
        };
        await nodeMailer.sendEmail(message);
        response.status = true;
        return response
    }else{
        return response
    }

}
async function create(userParam) {
    let response = {status:false,data:{}};

    const auth = await Authenticaton.findOne({ email: userParam.email }); 

    if(!auth){ 
        
        let newAuthData = 
        {
            username:userParam.username,
            email:userParam.email
        };

        const authentication = new Authenticaton(newAuthData);

        authentication.userClaims.isEmailVerified = true
        authentication.password = userParam.password;

        const team = await  Team.findOne({ email:userParam.email });
        if(team){
            authentication.userClaims.userRole.push({'userRole':'Team Leader'});
        }else{
            authentication.userClaims.userRole.push({'userRole':'Distributor'});
        }
        let newUserData = 
        {
            _id:authentication._id,
            firstName:userParam.firstName,
            lastName:userParam.lastName,
            emailAddress:team.email
        };
        await  authentication.save();
        const user = new User(newUserData);
        await user.save();
        response.data = user;
        response.status = true;
        return response;
    }else{
        return response;
    }   
}

async function update(id, userParam) {
    const user = await User.findById(id);

     if (!user) throw 'User not found';

    Object.assign(user, userParam);

    return await user.save();
}

async function _delete(id) {
    await User.findOneAndDelete(id);
} 