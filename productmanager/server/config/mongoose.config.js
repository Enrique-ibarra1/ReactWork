const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productmanagerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Db connection good"))
    .catch(err => console.log("There was an error", err))