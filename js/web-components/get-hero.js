var createCard = require('./card-component')
var getSpiderMan = function(options) {
var req = new XMLHttpRequest()
req.onreadystatechange = function() {
if (this.readyState == 4 & this.status == 200){
  if (options.name=='spider-man'){
    createCard(JSON.parse(this.responseText))
  }
  else{}

  }
}
req.open('Get', 'http://jsimmons.tgb2.ninja:4000')
req.send()
}
module.exports = getSpiderMan
