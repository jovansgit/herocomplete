var root = 'jsimmons.tgb2.ninja:3000/'
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);


router
  .on(function() {

    var content = document.getElementById('content')
    content.innerHTML = 'Hello from Home'

  })
  .on({
    'Avengers': function() {
 var content = document.getElementById('content')

// we need a button to click
// we need a function to go hit the jarvis-api - using XMLHttpRequest
var createCard = function(arr) {
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

if(arr[x].name == "Hulk") {

img.src ='/assets/hulk.jpg'
}
else if(arr[x].name == "Vision") {
img.src ='/assets/vision.jpg'
}
else if(arr[x].name == "Spider-Man") {
img.src ='/assets/spiderman2.jpg'
}
else if(arr[x].name == "Thor") {
img.src ='/assets/thor.jpg'
}
else if(arr[x].name == "Captain America") {
img.src ='/assets/captain.jpg'
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
var getAvengers = function() {
var req = new XMLHttpRequest()
req.onreadystatechange = function() {
if (this.readyState == 4 & this.status == 200){
        createCard(JSON.parse(this.responseText))
}
}
req.open('Get', 'http://jsimmons.tgb2.ninja:4000')
req.send()
}
var content = document.getElementById('content')
var button = document.createElement('button')
button.innerHTML = "Get Avengers"
button.onclick = getAvengers

var h1 = document.createElement('h1')
h1.innerHTML ="Avengers Assemble"
content.append(h1)
content.append(button)


 }
  })


  .resolve();
