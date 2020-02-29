const Team = require('../model/Team');
const nodeMailer = require('../util/Mailer');
const User = require('../model/User');

module.exports = {
    getAll,
    getById,
    create,
    update,
    activate,
    getByName,
    delete: _delete 
};
 
async function getAll() {
    return await Team.find();
}

async function getById(id) {
    return await Team.findById(id);
}

async function create(teamParam) {
     let response = {status:false,data:{}};
     const team = await  Team.findOne({name: teamParam.name});


     if(team){

        return response.status = true;

     }else{

        const message = {
            from: 'tnicc.hq@gmail.com', // Sender address
            to: teamParam.email,         // List of recipients
            subject: 'Email Activation | Team Leader | TNI', // Subject line
            html: `<h4>${teamParam.teamLeaderName},</h4>
            <h5>Thank you for registering your interest as Team Leader.<h/5>
            
            <h5>Please click the link below to verify your email and complete your registration.</h5>
            
            <a href="${teamParam.teamLink}">Email Verification</a>
            <h5>Best Regards,<h5>
            <h5>Translators' Network International Coordinating Center(TNICC)</h5>
            <h5><a href="#">http:www.downloads.tniglobal.org</a></h5>
            <a href="#">Facebook, twitter</a>`
        };
        const newTeam = new Team(teamParam);
        await nodeMailer.sendEmail(message);
        await newTeam.save();
        response.data = team;
        return response
    }
}
async function update(id, teamParam) {
    const team = await Team.findById(id);

     if (!team) throw 'Team not found';

    Object.assign(team, teamParam);

    return await team.save();
}
async function activate(id, userParam) {
    let newUser = {};
    newUser._id = id;
    newUser.firstName = userParam.name;
    newUser.emailAddress = userParam.email;

    const user = new User(newUser);

    if (!user) {
        throw new Error()
    }
    return await user.save();
}
async function getByName(id) {
    let team = {};
    const teams = await Team.find();
    for(var i = 0; i < teams.length; i++){
        if(teams[i].name == id){
          team = teams[i];
       } 
   }
    return  team;
}
async function _delete(id) {
    await Team.findOneAndDelete(id);
} 