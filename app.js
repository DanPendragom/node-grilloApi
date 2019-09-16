const Express = require('express');
const BodyParser = require('body-parser');

// database config module
const db = require('./src/models/db');

// user route module
const userRoute = require('./src/routes/userRoute');

// upload route
const uploadRoute = require('./src/routes/uploadRoute');

const app = Express();

// database connect
db.Connect();

// BodyParser config
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// user route acivate
userRoute(app);

// upload route activate
uploadRoute(app);

// server run config
app.listen(3000, () => {
    console.log('Listenning at :3000');
});