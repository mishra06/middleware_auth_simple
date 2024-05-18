const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const PORT = 4000;
const server = express();


const loginInfo = (req, res, next) => {
    const mthd = req.method
    const urlll = req.url
    const date = new Date()
    
    const logData = `METHOD: ${mthd} URL : ${urlll}  at Time :- ${date}:${'mishra'}\n`
    fs.appendFileSync("url_Logs.txt", logData)
    next()

}

server.use(morgan('dev'))
server.use(loginInfo)

server.get("/user/loggedIn", (req, res) => {
    const userInfo = 
        "hello"
    
    res.json({
        status: "success",
        data: [userInfo]
    })
})



server.listen(PORT, () => {
    console.log("server is started at port " + PORT);
})