const express = require("express")
const app = require("../app")
const router = express.Router()
const Post = require("../models")


router.get("/", (req,res) => {res.send("Hello World")})


router.post("/post", (req, res) => {
   const {firstName, lastName, Email, age} = req.body
  const post = new Post({
      firstName : firstName,
      lastName: lastName,
      Email: Email,
      age : age
  })
  const savedPost = post.save()
  .catch((err) => {console.log(err)})
  .then((data) => {console.log(data)})
  
})


router.delete("/delete", (req, res) => {})


router.patch("/patch", (req, res) => {})


/*const https = require('https')
const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000"
})
const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}
//This can be inside our callback url
const req = https.request(options, res => {
  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  });
  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})
req.write(params)
req.end()*/

/*
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios');
const { port, hostname, secretKey } = require('./config')

app.use(bodyParser.json())

const process_request = (req, res, next) => {
  const method = req.method
  const url = `${hostname}${req.url}`

  let headers = {
    authorization: `Bearer ${secretKey}`,
    'content-type': 'application/json'
  }

  if(method === 'POST' || method === 'PUT') {
    return axios({
      method,
      url,
      data: req.body,
      headers
    }).then(function (response) {
      return res.json(response.data)
    }).catch(function (error){
      return res.status(error.response.status).json(error.response.data)
    }); 
  } else {
    return axios({
      method,
      url,
      headers
    }).then(function (response) {
      return res.json(response.data)
    }).catch(function (error){
      return res.status(error.response.status).json(error.response.data)
    });
  }
}

app.get('/', (_, res) => res.status(200).send('Health check OK'))

app.get('/callback', (_, res) => {
  res.status(200).send(`<div>Payment successful!</div>`)
})

app.use(process_request)



app.listen(port, () => console.log(`Server listening on port ${port}!`))

module.exports = router*/