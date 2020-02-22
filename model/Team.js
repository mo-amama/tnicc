const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
     name: {
         type: String
     },
     language: {
         type: String
     },
     teamLink: {
         type: String
     },
     partnershipLink: {
        type: String
    },
     dateCreated:{
         type: Date,
         default: Date.now 
     },
})



teamSchema.set('toJSON', { virtuals: true });


const Team = mongoose.model('Team', teamSchema)

module.exports = Team