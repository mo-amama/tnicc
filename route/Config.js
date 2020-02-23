const express = require('express');
const router = express.Router();

router.get('/config', function(req, res){ 
    try{
        var config = {
            apiKey: "AIzaSyDEQPLbNYogRPr0G47ErxqkGP6VCMvakvI",
            authDomain: "tnicc-412a9.firebaseapp.com",
            databaseURL: "https://tnicc-412a9.firebaseio.com",
            projectId: "tnicc-412a9",
            storageBucket: "tnicc-412a9.appspot.com",
            messagingSenderId: "1021374360464",
            appId: "1:1021374360464:web:5d7f9a0230f14f1d442115",
            measurementId: "G-T1GRXX01CV"
          };
         res.status(200).send(config);
       }
       catch(error) {
           console.log({message: error.message || "Some error occurred while updating user."})
       };
   });  

   module.exports = router;
