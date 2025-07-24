const express = require('express');
const { dbConnection , sequelize} = require('./config/dbConnect');
const { router } = require('./routes/routes'); // ✅ Un-commented and fixed
const app = express();
// const {User} = require('./model/userModel'); // ✅ Un-commented and fixed
// const {userDetails} = require('./model/userDetails'); // ✅ Un-commented and fixed
// const {sequelize} = require('./model/sequelize'); // ✅ Un-commented and fixed
app.use('/', router); // ✅ Now router is defined

// User.sync({});  // it create table in database if it does not exist
// User.sync({force:true}); // it drop table and create new one   hame yha email add kara to vo bhi add ho gya 
// User.sync({alter:true})  // ye table ko drop nahi karega bass schema me jo ubdate kara h use update karega.
// userDetails.sync();

// sequelize.sync({ force: true });  // synchroniz all models at once
// sequelize.sync({ alter: true });

(async ()=>{
    try{
        await sequelize.sync({alter:true})
        console.log('database synchronize successfuly')
    }catch(error){
     console.log('error syncronize in db ', error)
    }
})();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    dbConnection();
});
 
module.exports = { sequelize}


