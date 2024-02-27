const express = require('express')
const app = express()
let ejs = require('ejs')
app.set('view engine', 'ejs')
// 3306
// 80, 443
const port = 3000 // radiokanal
 
const players = [
    {id:1,jersey:21,name:"Foppa"},
    {id:2,jersey:2,name:"Anders Eldebrink"},
    {id:3,jersey:13,name:"Sudden"}
] 

app.get('/contact', (req,res)=>{
    let datum = new Date()
    
    res.render('pages/contact',{
        theTime:datum,
        players
    })
})
 
app.get('/api/players', (req, res) => {
    res.json(players)
  })
 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/test', (req, res) => {
    // i req objektet finns tex cookies 
    let datum = new Date()
    
    res.send(`<html><body><h1>Test</h1><ul><li>${datum}</li><li>12</li></ul></body></html>`)
  })

 
app.get('/test', (req, res) => {
    // i req objektet finns tex cookies
 
    res.send('<html><body><h1>Test</h1><ul><li>11</li><li>12</li></ul></body></html>')
  })
 
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})