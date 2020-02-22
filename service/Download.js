const Download = require('../model/Download');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete 
};
 
async function getAll() {
    return await  Download.find();
}

async function getById(id) {
    return await  Download.findById(id);
}

async function create( downloadParam) {
     const  download = new  Download( downloadParam);
    return await  download.save();
}

async function update(id,  downloadParam) {
    const  download = await  Download.findById(id);

     if (! download) throw ' Download not found';

    Object.assign( download,  downloadParam);

    return await  download.save();
}

async function _delete(id) {
    await  Download.findOneAndDelete(id);
} 