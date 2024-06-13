const Service = require('./Service.js');
const repo = require('../repo/HelpRepo.js')
class HelpService extends Service {
    constructor() {
        super(repo);
    }
    async getAll(query) {
        try {
            const { location, status, priority } = query;
        let filter = {};
        if (location) {
            filter.location_id = location;
        }
        if (status) {
            filter.status_id = status;
        }
        if (priority) {
            filter.priority_id = priority;
        }
            return await this.repo.getAll(filter);
        }
        catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
}

module.exports = new HelpService();