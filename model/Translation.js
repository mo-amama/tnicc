const mongoose = require('mongoose')

const translationSchema = mongoose.Schema({
    language: {
         type: String
     },
     descritpion: {
         type: String
     },
     docType: {
         type: String
     },
     dataURL: {
        type: String
    },
     dateCreated:{
         type: Date,
         default: Date.now 
     },
})



translationSchema.set('toJSON', { virtuals: true });


const TranslationSchema = mongoose.model('TranslationSchema', translationSchema)

module.exports = TranslationSchema