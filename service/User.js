const User = require('../model/User');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete 
};
 
async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function create(userParam) {
     const user = new User(userParam);
    return await user.save();
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