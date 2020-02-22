const Translation = require('../model/Translation');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete 
};
 
async function getAll() {
    return await Translation.find();
}

async function getById(id) {
    return await Translation.findById(id);
}

async function create(translationParam) {
     const translation = new Translation(translationParam);
    return await translation.save();
}

async function update(id, translationParam) {
    const translation = await Translation.findById(id);

     if (!translation) throw 'Translation not found';

    Object.assign(translation, translationParam);

    return await translation.save();
}

async function _delete(id) {
    await Translation.findOneAndDelete(id);
} 