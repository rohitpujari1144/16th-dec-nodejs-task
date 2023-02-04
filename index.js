const http=require('http')
const fs=require('fs')
const express=require('express')
const app=express()
const port=7000

const server=http.createServer((req, res)=>{
    let date=new Date()
        let timeStamp=date.getTime()
        fs.writeFileSync(`${timeStamp}.txt`, `${date}`)
        let data=fs.readFileSync(`${timeStamp}.txt`)
        res.writeHead(200, {'content-type':'text/html'})
        res.end(data)
})

server.listen(port)