var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')


var getHero  = require('../web-components/get-hero')


var vision  = function(){
Menu()
getHero({name:'Vision'})

}
module.exports = vision

