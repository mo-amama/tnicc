const distributionService = require('../service/Distribution');

 exports.register = function(req, res, next) {
    distributionService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}

exports.getAll = function(req, res, next) {
    distributionService.getAll()
        .then(team => res.json(team))
        .catch(err => next(err)); 
}

exports.getById = function(req, res, next) {
    distributionService.getById(req.params.id)
        .then(teams => teams ? res.json(teams) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.update = function(req, res, next) {
    distributionService.update(req.params.id,  req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports._delete = function(req, res, next) {
    distributionService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
} 