
const mongoose = require('mongoose')

const languageSchema = mongoose.Schema({
     name: {
         type: String
     },
     center: {
         type: String
     },
     country: {
         type: String
     },
     dateCreated:{
         type: Date,
         default: Date.now 
     },
})



languageSchema.set('toJSON', { virtuals: true });


const Language = mongoose.model('Language', languageSchema)

module.exports = Language