const autoBind = require('auto-bind');
const { log } = require('console');

class Controller {

    constructor(service) {
        this.service = service;
        autoBind(this); 
    }

    async getAll(req, res, next) {
        try {
            const result = await this.service.getAll(req.query);
            console.log("!!!!!!!!!!!!"+result)
            //return res.status(response.statusCode).json(response);
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        console.log(req.params);
        const paramName = Object.keys(req.params)[0]; // משיג את שם הפרמטר הראשון בקריאה לפונקציה get
        const id = req.params[paramName]; // משיג את ערך הפרמטר לפי השם הנמצא ב-paramName

        try {
            const response = await this.service.get(id);

            return res.status(response.statusCode).json(response.item);
        } catch (e) {
            next(e);
        }
    }

    async insert(req, res, next) {
        try {
            const response = await this.service.insert(req.body);

            return res.status(response.statusCode).json(response.item);
        } catch (e) {
            next(e);
        }
    }



    async update(req, res, next) {
        const paramName = Object.keys(req.params)[0]; // משיג את שם הפרמטר הראשון בקריאה לפונקציה get
        const id = req.params[paramName];

        try {
            const response = await this.service.update(id, req.body);

            return res.status(response.statusCode).json(response.item);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;

        try {
            const response = await this.service.delete(id);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = Controller;