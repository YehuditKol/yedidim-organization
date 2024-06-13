const mongoose=require('mongoose');
require('dotenv').config()

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://yehuditk33:hdPtv3FxThjRiauI@volunteerscluster.weebmnd.mongodb.net/', {
           useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'volunteer_schedule' // שם מסד הנתונים
          });

        console.log('connected to Yedidim db...')
    }catch(err){
        console.log(err);
        throw new Error('Error connecting Yedidim db')
    }
}
//connect()
module.exports={connect}