const distributorService = require('../service/Distributor');

 exports.register = function(req, res, next) {
    distributorService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}

exports.sendEmail = function(req, res, next) {
    distributorService.sendDistributorLinkToEmail(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}

exports.getAll = function(req, res, next) {
    distributorService.getAll()
        .then(distributors => res.json(distributors))
        .catch(err => next(err)); 
}

exports.checkLinkStatus = function(req, res, next) {
    distributorService.checkLinkActivation(req.id)
    .then((data) => res.status(200).send(data))
    .catch(err => next(err));
} 

exports.getById = function(req, res, next) {
    distributorService.getById(req.params.id)
        .then(distributor => distributor ? res.json(distributor) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.update = function(req, res, next) {
    distributorService.update(req.params.id,  req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports._delete = function(req, res, next) {
    distributorService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
} 