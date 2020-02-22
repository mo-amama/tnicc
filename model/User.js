const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
      _id: {
         type: String
     }, 
     firstName: {
         type: String
     },
     middleName: {
         type: String
     },
     lastName: {
         type: String
     },
     gender: {
         type: String
     },
     phoneNumber: {
         type: String
     },
     emailAddress: {
         type: String
     },
     contactAddress: {
         type: String
     }, 
     city: {
         type: String
     },
     region: {
         type: String
     },
     country: {
         type: String
     },
     phophotoURLto: {
         type: String
     }, 
     dateCreated:{
         type: Date,
         default: Date.now 
     },
})



userSchema.set('toJSON', { virtuals: true });


const User = mongoose.model('User', userSchema)

module.exports = User