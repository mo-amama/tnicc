const jwt = require('jsonwebtoken');
const config = require('../db/config');
const Authenticaton = require('../model/Authentication');
//const authService = require('../service/Authentication');
const Team = require('../model/Team');

/* const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '') 
    const data = jwt.verify(token, config.secret)
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
 */
const activateTeamLead = async(req, res, next) => {
    
    let route = req.originalUrl.split("/");

    try {

       const team = await  Team.findOne({ name:route[4] });
        

        if(!team){
            throw new Error()
        }else{
            const auth = await Authenticaton.findOne({ email: team.email }); 

            if(!auth){

                let newData = 
                {
                    username:team.teamLeaderName,
                    email:team.email
                };
                const authentication = new Authenticaton(newData);

                authentication.userClaims.isEmailVerified = true
                authentication.userClaims.userRole.push({'userRole':'Team Leader'});

               // await  authentication.save();
                req.user = authentication

            }else{
                req.user = auth
            }   

        }

        next()
    } catch (error) {
        res.status(401).send({ error: 'This resource is not available!' })
    }

} 
const authenticateRoute = async(req, res, next) => {
    
    let route = req.originalUrl.split("/");

    try {

       const team = await  Team.findOne({ name:route[4] });
        

        if(!team){
            throw new Error()
        }
        const auth = await Authenticaton.findOne({ email: team.email }); 

        if(auth){
            throw new Error()
        }
        next()
    } catch (error) {
        res.status(401).send({ error: 'This resource is not available!' })
    }

}
module.exports = {
    activateTeamLead,
    authenticateRoute
};

 