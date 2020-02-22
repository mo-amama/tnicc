const languageService = require('../service/Language');


 exports.register = function(req, res, next) {
    languageService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}

exports.getAll = function(req, res, next) {
    languageService.getAll()
        .then(languages => res.json(languages))
        .catch(err => next(err)); 
}

exports.getById = function(req, res, next) {
    languageService.getById(req.params.id)
        .then(language => language ? res.json(language) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.update = function(req, res, next) {
    languageService.update(req.params.id,  req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports._delete = function(req, res, next) {
    languageService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
} 