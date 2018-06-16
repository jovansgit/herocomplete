var createCard = require('./card-component')
var getAvengers = function(options) {
var req = new XMLHttpRequest()
req.onreadystatechange = function() {
if (this.readyState == 4 & this.status == 200){
  if (options.all==true){

    console.log(JSON.parse(this.responseText))
    createCard(JSON.parse(this.responseText))
  }
 // else if (options.all==false) {
//alert('this is false') 
 // }
}
}  
req.open('Get', 'http://jsimmons.tgb2.ninja:4000')
req.send()
}
module.exports = getAvengers
