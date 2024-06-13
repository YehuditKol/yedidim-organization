const Service = require('./Service.js');
const repo = require('../repo/VolunteerRepo.js')
class VolunteerService extends Service {
    constructor() {
        super(repo);
    }
}

module.exports = new VolunteerService();