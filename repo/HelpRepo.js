const Repository = require('./Repository.js');
const Help=require('../dal-models/help.model.js');

class HelpRepo extends Repository{
    constructor(){
        super(Help);
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
}
module.exports=new HelpRepo();