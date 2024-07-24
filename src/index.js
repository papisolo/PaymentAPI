const app = require("./app")

const http = require("http")

http.createServer(app)

/* our local server runs with or without this file all we have to do is just to set our start script in package json to app.js*/