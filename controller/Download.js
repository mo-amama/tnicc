const downloadService = require('../service/Download');

 exports.register = function(req, res, next) {
    downloadService.create(req.body)
        .then((data) => res.status(200).send(data))
        .catch(err => next(err));
}

exports.getAll = function(req, res, next) {
    downloadService.getAll()
        .then(download => res.json(download))
        .catch(err => next(err)); 
}

exports.getById = function(req, res, next) {
    downloadService.getById(req.params.id)
        .then(downloads => downloads ? res.json(downloads) : res.sendStatus(404))
        .catch(err => next(err));
}

exports.update = function(req, res, next) {
    downloadService.update(req.params.id,  req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

exports._delete = function(req, res, next) {
    downloadService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
} 