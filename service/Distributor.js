const Distributor = require('../model/Distributor');
const nodeMailer = require('../util/Mailer');
module.exports = {
    getAll,
    getById,
    create,
    update,
    sendDistributorLinkToEmail,
    checkLinkActivation,
    delete: _delete 
};
 
async function getAll() {
    return await Distributor.find();
}

async function getById(id) {
    return await Distributor.findById(id);
}
async function checkLinkActivation(id) {
    const distributor = await Distributor.findById(id);
    if(distributor.isActivated){
        return true;
    }else{
        return false;
    }
}

async function create(distributorParam) {
     const distributor = new Distributor(distributorParam);
    return await distributor.save();
}
async function sendDistributorLinkToEmail(message) {
   nodeMailer.sendEmail(message);
  // return await distributor.save();
}
async function update(id, distributorParam) {
    const distributor = await Distributor.findById(id);

     if (!distributor) throw 'Distributor not found';

    Object.assign(distributor, distributorParam);

    return await distributor.save();
}

async function _delete(id) {
    await Distributor.findOneAndDelete(id);
} 