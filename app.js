const express = require('express');
const { dbConnection } = require('./config/dbConnect');
const { router } = require('./routes/routes'); // ✅ Un-commented and fixed
const app = express();
const {User} = require('./model/userModel'); // ✅ Un-commented and fixed

app.use('/', router); // ✅ Now router is defined


User.sync({});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    dbConnection();
});
