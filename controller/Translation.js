const translationService = require('../service/Translation');


 exports.register = function(req, res, next) {
    translationService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}


exports.getAll = function(req, res, next) {
    translationService.getAll()
        .then(translations => res.json(translations))
        .catch(err => next(err)); 
}

exports.getById = function(req, res, next) {
    translationService.getById(req.params.id)
        .then(translation => translation ? res.json(translation) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.update = function(req, res, next) {
    translationService.update(req.params.id,  req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports._delete = function(req, res, next) {
    translationService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
} 