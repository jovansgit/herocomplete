var createCard = require('./hero-component')
var getHero = function(Hero, options) {
  var req = new XMLHttpRequest()
req.onreadystatechange = function() {
if (this.readyState == 4 & this.status == 200){
  if (Hero.name == 'Vision'){
Hero = (JSON.parse(this.responseText));
createCard(Hero[0]);
console.log(Hero[0]);  
}
else if(Hero.name == 'Hulk'){
Hero = (JSON.parse(this.responseText));
createCard(Hero[1]);
console.log(Hero[1]);  
}
else if (Hero.name == 'Thor'){
Hero = (JSON.parse(this.responseText));
createCard(Hero[2]);
console.log(Hero[2]);  
}
else if (Hero.name == 'Captain America'){
Hero = (JSON.parse(this.responseText));
createCard(Hero[3]);
console.log(Hero[3]);  
}
else if (Hero.name == 'spider-man'){
Hero = (JSON.parse(this.responseText));
createCard(Hero[4]);
console.log(Hero[4]);  
}
}
}
req.open('Get', 'http://jsimmons.tgb2.ninja:4000//')
req.send()
}
module.exports = getHero
