const autoBind = require( 'auto-bind' );
const db = require('./db.js');


class Repository{
    constructor(model){
        this.model=model;
        autoBind(this);
        db.connect();
    }
    async getAll(query) {
        try {
            return await this.model.find(query);
            
        }
        catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }


    async get(id) {
        try {
            const item = await this.model.findOne({id:id});

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            }
            //check
            return item;
        } catch (errors) {
            throw errors;
        }
    }

    async insert(data) {
        try {
            const result = await this.model.aggregate([
                { $group: { _id: null, maxId: { $max: "$id" } } }
            ]).exec();
    
            const maxId = result.length > 0 ? result[0].maxId : 0;
    
            data.id = maxId + 1;
    
            const item = await this.model.create(data);
            
            if (item) {
                return item;
            }
    
            throw new Error('Something wrong happened');
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const item = await this.model.findOneAndUpdate({ id: id }, data, { new: true });
    
            return item;
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            const item = await this.model.findByIdAndDelete(id);

            if (!item) {
                const error = new Error('Item not found');

                error.statusCode = 404;
                throw error;
            } else {
                return {item,  'deleted': true };
            }
        } catch (errors) {
            throw errors;
        }
    }
}

module.exports = Repository;
