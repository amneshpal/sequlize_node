const e = require("express")
const { userDetails } = require("../model/userDetails")

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
module.exports = {insert}