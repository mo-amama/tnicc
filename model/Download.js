const mongoose = require('mongoose')

const downloadSchema = mongoose.Schema({
     name: {
         type: String
     },
     email: {
         type: String
     },
     language: {
         type: String
     },
     translation: {
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



downloadSchema.set('toJSON', { virtuals: true });


const Download = mongoose.model('Download', downloadSchema)

module.exports = Download