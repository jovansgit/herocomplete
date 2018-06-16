let express = require("express")
let app = express()
let Marvel =require("./avengers")
app.use(function(req, res, next){
res.header("Access-Control-Allow-Origin", "*")
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
next()
})

var avengers = new Marvel({
  publicKey : 'aa35790f79adc3d81c17d912865a53d3',
  privateKey : '358377c3e81afe5a3b6c2f42ea2f152d24a1cc48'})

app.get("/", function(request,response){
 avengers.assemble(function(avengers){

   response.send(JSON.parse(avengers))
   })
})

app.get("//", function(request,response){
  avengers.getHero(function(avengers){
   response.send(JSON.parse(avengers))
   })
})


app.listen("4000", function() {
console.log("running on port 4000")
})
