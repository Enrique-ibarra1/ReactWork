const mongoose = require('mongoose'),   
    database = 'authorsdb'

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Db connection good yes"))
    .catch(err => console.log("There was an issue connection to the database", err))