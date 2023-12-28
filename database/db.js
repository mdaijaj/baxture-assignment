const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
let url=process.env.DATABASE;

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("db connected successfully!")
}).catch((err)=>{
    console.log("errro while connected db,........")
    console.log(err.message)
})


module.exports=mongoose;