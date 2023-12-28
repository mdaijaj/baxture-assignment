const express = require('express')
const http = require('http');
const dotenv = require('dotenv');
const app = express()
dotenv.config();

// const cors= require('cors')
// const cookieParser= require('cookie-parser')
let PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(__dirname)); 
// app.use(cors());
// app.use(cookieParser());

app.get('/', (req, res)=>{
    console.log("welcome api is working....")
    return res.send({message: "welcome api is working...."})
})

let routes=require('./route/index')
app.use('/', routes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
