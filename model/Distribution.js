
const mongoose = require('mongoose')

const distributionSchema = mongoose.Schema({
    type: {
         type: String
     },
     distributor: {
         type: String
     },
     translation: {
         type: String
     },
     language: {
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



distributionSchema.set('toJSON', { virtuals: true });


const Distribution = mongoose.model('Distribution', distributionSchema)

module.exports = Distribution