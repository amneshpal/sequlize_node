const insert = (req, res)=>{
    const {name, email, phone} = req.body;
    res.status(200).json({message:"User inserted"})
}

module.exports = {insert}