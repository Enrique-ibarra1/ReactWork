const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/database.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
require('./server/routes/author.routes') (app);
app.listen(8000, () => {
    console.log("Listening on 8000")
});


// const express = require('express'),
//     app = express(),
//     port = 8000,
//     cors = require('cors'),
//     server = app.listen(port, () => console.log("Listening on port 8000"));

// app.use(cors(), express.json(), express.urlencoded({extended:true}));
// require('./server/config/database.config');
// require('./server/routes/author.routes')(app);