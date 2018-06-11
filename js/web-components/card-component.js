var createCard  = function(arr){ 
  for (var x=0; x<arr.length; x++){
var card = document.createElement('div')
card.className = 'w3-card-4'
card.style.width = '35%'
var img = document.createElement('img')
var heroname = document.createElement('p')
heroname.innerHTML = arr[x].name
heroname.className = 'w3-container w3-center'
card.append(heroname)
var buttondetails = document.createElement('button')
buttondetails.className =  'w3-button w3-block w3-black'
buttondetails.style.width = '30%'
buttondetails.innerHTML = "Find out more about " + arr[x].name
content.append(buttondetails)


if(arr[x].name == "Hulk"){ 
img.src ='/assets/hulk.jpg'
buttondetails.addEventListener("click", hulkFunction);
function hulkFunction() {
window.location.href = 'http://jsimmons.tgb2.ninja:3000/#/avengers/hulk'
}
}
else if(arr[x].name == "Vision") {
img.src ='/assets/vision.jpg'
buttondetails.addEventListener("click", visionfunction );
function visionfunction() {
window.location.href = 'http://jsimmons.tgb2.ninja:3000/#/avengers/vision'
}
}
else if(arr[x].name == "Spider-Man") {
img.src ='/assets/spiderman2.jpg'
buttondetails.addEventListener("click", spiderfunction);
function spiderfunction() {
window.location.href = 'http://jsimmons.tgb2.ninja:3000/#/avengers/spider'
}
}
else if(arr[x].name == "Thor") {
img.src ='/assets/thor.jpg'
buttondetails.addEventListener("click", thorfunction);
function thorfunction() {
window.location.href = 'http://jsimmons.tgb2.ninja:3000/#/avengers/thor'
}
}
else if(arr[x].name == "Captain America") {
  img.src ='/assets/captain.jpg'
  buttondetails.addEventListener("click", capfunction);
function capfunction() {
window.location.href = 'http://jsimmons.tgb2.ninja:3000/#/avengers/captain'
}
}
card.append(img)
var cardContainer = document.createElement('div')
cardContainer.className = 'w3-container w3-center'
var note = document.createElement('p')
note.innerHTML = arr[x].description
cardContainer.append(note)
card.append(cardContainer)
content.append(card)
 }
  }
module.exports = createCard
