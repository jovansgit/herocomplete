var createCard = function(Hero){
var card = document.createElement('div')
card.className = 'w3-card-4'
card.style.width = '35%'
var img = document.createElement('img')
var heroname = document.createElement('p')
heroname.innerHTML = Hero.name
heroname.className = 'w3-container w3-center'
card.append(heroname)
var buttondetails = document.createElement('button')

var note = document.createElement('p')
var note2 = document.createElement('p')


if(Hero.name == "Hulk"){
img.src ='/assets/hulk.jpg'
note.innerHTML ='My favorite Hulk comic book is : ' + Hero.comics.items[1].name
note2.innerHTML = 'My favorite hulk series is : ' + Hero.series.items[1].name
}

else if(Hero.name == "Vision") {
img.src ='/assets/vision.jpg'
note.innerHTML ='My favorite Vision comic book is : ' + Hero.comics.items[3].name
note2.innerHTML = 'My favorite Vision series is : ' + Hero.series.items[8].name
}
else if(Hero.name == "Spider-Man") {
img.src ='/assets/spiderman2.jpg'
note.innerHTML ='My favorite Spider Man comic book is : ' + Hero.comics.items[1].name
note2.innerHTML = 'My favorite Spider Man series is : ' + Hero.series.items[3].name
}
else if(Hero.name == "Thor") {
img.src ='/assets/thor.jpg'
note.innerHTML ='My favorite Thor commic book is : ' + Hero.comics.items[2].name
note2.innerHTML = 'My favorite Thor series is : ' + Hero.series.items[1].name
}
else if(Hero.name == "Captain America") {
  img.src ='/assets/captain.jpg'
note.innerHTML ='My favorite Captain America comic book is : ' + Hero.comics.items[8].name
note2.innerHTML = 'My favorite Captain America series is : ' + Hero.series.items[4].name
}
card.append(img)
var cardContainer = document.createElement('div')
cardContainer.className = 'w3-container w3-center'
cardContainer.append(note)
cardContainer.append(note2)
card.append(cardContainer)
content.append(card)
 }

module.exports = createCard
