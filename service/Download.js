const Download = require('../model/Download');
const Language = require('../model/Language');
const Translation = require('../model/Translation');

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
    let response = {year:true,month:false,url:''};
     const  download = new  Download(downloadParam);
     let lang = await  Language.findById(downloadParam.language);
     const trans = await  Translation.find();
     download.language = lang.name;
    
     for(var i = 0; i < trans.length; i++){
          if(trans[i].year == download.year){
            response.year = true
            if(trans[i].month == download.month){
                response.month = true
                response.url = trans[i].dataURL
             }
         } 
     }
    await  download.save();
    return response;
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