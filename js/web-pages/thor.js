var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')


var getHero  = require('../web-components/get-hero')


var thor  = function(){
  Menu()
getHero({name:'Thor'})
}
module.exports = thor
