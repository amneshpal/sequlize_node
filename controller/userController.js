const e = require("express")
const { userDetails } = require("../model/userDetails")
const { sequelize } = require("../model/userDetails")
const { Op, where } = require('sequelize');
/*

const insert = async(req, res)=>{
// //ye h data ko insert karne ke liye  isme agar hm url to hit karenge to databas me value save ho jayeg-i 
    //    const data=  userDetails.build({name:'amnesh'})
    // //    console.log(data.name);
    //    await data.save()


    // iska another method bhi h use karne ka  create 
  

    //  const db = await userDetails.create({name: "Ab pal"})
    // //   console.log(db)
    //   console.log(db.toJSON())  //  for getting in format 


    //   if i want to chnage name
    
     const db = await userDetails.create({name:"amneshpal" , age :40})
   await db.increment('age')
    //  db.name = 'piyush'
    // await db.save()
    //   console.log(db.toJSON())  //  for getting in format 

// set ka use 
// db .set ({
//     name :'abc',
//     favoriteColor : "black"
// })
// await db.save()



// update ka use 

// await db.update({name:"bgdnfgnf"})
// await db.save()
// await amneshpal.destroy();


// db.age = 40;

await db.save();  // No `fields` => saves all changed values

console.log(db.favoriteColor);  // 'blue'


}
 
*/


// const testFunction = async (req, res) => {
//   const newUser = {
//     name: "amneshpal",
//     lastname: "pal",
//     email: "amneshpal@gmail.com",
//     password: "amneshpal123",
//     age: 40
//   }
//   const users = [
//     {
//       name: "amneshpal",
//       lastname: "pal",
//       email: "amneshpal@gmail.com",
//       password: "amneshpal123",
//       age: 40
//     }
//   ]
//   const createdUser = await userDetails.create(newUser)
//   return res.json(createdUser)
// }

// module.exports = {insert,  testFunction}





const testFunction = async (req, res) => {
  // try {
  //   const data = await userDetails.findAll({
  //     where: {
  //       // id: 3,
  //       name :'abhi',
  //       isActive: false
  //     }
  //   });

  //   return res.json(data);  // ✅ Send result back to client
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return res.status(500).json({ error: "Internal server error" });
  // }



  // using sequelize operator 

  // const data  =  await userDetails.findAll({
  //   where :{
  //     id:{
  //       [Op.eq]: 1,
  //     }
  //   }
  // });
  // return res.json(data)



  // const deletedata  =  await userDetails.destroy({
  //   where :{     
  //       id: 1,
  //   }
  // });
  // return res.json(deletedata)



  // const updateUser = await  userDetails.update({
  //   name: 'jone',
  //   age: 40
  // },
  //   {
  //     where: { id: 2 }
  //   }
  // )
  // return res.json(updateUser)



// const db =  await userDetails.findByPk(2);
// return res.send(db)

// const db =  await userDetails.findOne({
//   where:{
//      name:"amneshpal"
//   }
// });
// return res.send(db)



const [db] =  await userDetails.findOrCreate({
  where:{
     name:"khushi"
  },
  defaults:{
    name:'xyz',
    favoriteColor: 'black'
  }
});
return res.send(db)


}
module.exports = { testFunction };
