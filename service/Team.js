const Team = require('../model/Team');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete 
};
 
async function getAll() {
    return await Team.find();
}

async function getById(id) {
    return await Team.findById(id);
}

async function create(teamParam) {
     const team = new Team(teamParam);
    return await team.save();
}

async function update(id, teamParam) {
    const team = await Team.findById(id);

     if (!team) throw 'Team not found';

    Object.assign(team, teamParam);

    return await team.save();
}

async function _delete(id) {
    await Team.findOneAndDelete(id);
} 