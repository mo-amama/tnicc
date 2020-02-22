const Language = require('../model/Language');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete 
};
 
async function getAll() {
    return await Language.find();
}

async function getById(id) {
    return await Language.findById(id);
}

async function create(languageParam) {
     const language = new Language(languageParam);
    return await language.save();
}

async function update(id, languageParam) {
    const language = await Language.findById(id);

     if (!language) throw 'Language not found';

    Object.assign(language, languageParam);

    return await language.save();
}

async function _delete(id) {
    await Language.findOneAndDelete(id);
} 