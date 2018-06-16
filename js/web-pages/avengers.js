var Menu = require ('../web-components/menu-component')
var getAvengers = require('../web-components/avenger-component')
var Avengerspage = function(){
Menu()
getAvengers({all:true})
}
module.exports =Avengerspage
