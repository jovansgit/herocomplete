var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')
var getHero  = require('../web-components/get-hero')
var captain = function(){

  Menu()
getHero({name:'Captain America'})
}
module.exports = captain

