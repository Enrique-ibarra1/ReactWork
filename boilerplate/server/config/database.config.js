const mongoose = require('mongoose'),   
//please change this thanks
    database = 'dbgoeshere'

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Db connection good yes, yes"))
    .catch(err => console.log("There was an issue connection to the database", err))