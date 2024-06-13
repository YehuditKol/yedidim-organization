const Controller = require('./Controller.js');
const VolunteerService = require('../services/VolunteerService.js');
class VolunteersController extends Controller {
    constructor() {
       super(VolunteerService)
    }
}
module.exports=new VolunteersController();