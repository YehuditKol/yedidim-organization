const HelpService = require('../services/HelpService.js');
const Controller = require('./Controller.js');

class HelpsController extends Controller {
    constructor() {
       super(HelpService)
    }
}
module.exports=new HelpsController();