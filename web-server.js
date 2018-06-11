var express = require("express")
let app = express()
var path =require('path')

app.use(express.static('app'))

app.get('/#', function(req,res) {
  res.sendFile(path.join(__dirname,'app/index.html'))
})

app.listen('3000', function() {
  console.log('running on port 3000')
})

