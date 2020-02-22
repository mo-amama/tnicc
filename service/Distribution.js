const Distribution = require('../model/Distribution');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete 
};
 
async function getAll() {
    return await Distribution.find();
}

async function getById(id) {
    return await Distribution.findById(id);
}

async function create(distributionParam) {
     const distribution = new Distribution(distributionParam);
    return await distribution.save();
}

async function update(id, distributionParam) {
    const distribution = await Distribution.findById(id);

     if (!distribution) throw 'Distribution not found';

    Object.assign(distribution, distributionParam);

    return await distribution.save();
}

async function _delete(id) {
    await Distribution.findOneAndDelete(id);
} 