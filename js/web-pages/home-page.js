var HomePage = function(){
let content = document.getElementById('content')
let nav = document.createElement('div')
nav.className ='w3-bar w3-blue'

let home = document.createElement('a')
home.className = 'w3-bar-item w3-button'
home.href ='#'
home.innerHTML ='Home'
nav.append(home)


let avengers_nav  = document.createElement('a')
avengers_nav.className = 'w3-bar-item w3-button'
avengers_nav.href ='#/avengers'
avengers_nav.innerHTML ='Avengers'
nav.append(avengers_nav)


let vision_nav = document.createElement('a')
vision_nav.className ='w3-bar-item w3 button'
vision_nav.href ='#/avengers/vision'
vision_nav.innerHTML ='Vision'
nav.append(vision_nav)

let hulk_nav = document.createElement('a')
hulk_nav.className ='w3-bar-item w3 button'
hulk_nav.href ='#/avengers/hulk'
hulk_nav.innerHTML ='Hulk'
nav.append(hulk_nav)

let thor_nav = document.createElement('a')
thor_nav.className ='w3-bar-item w3 button'
thor_nav.href ='#/avengers/thor'
thor_nav.innerHTML ='Thor'
nav.append(thor_nav)

let captain_nav = document.createElement('a')
captain_nav.className ='w3-bar-item w3 button'
captain_nav.href ='#/avengers/captain'
captain_nav.innerHTML ='Captain'
nav.append(captain_nav)
let spider_nav = document.createElement('a')
spider_nav.className ='w3-bar-item w3 button'
spider_nav.href ='#/avengers/spider'
spider_nav.innerHTML ='Spider'
nav.append(spider_nav)
content.append(nav)
}
module.exports = HomePage
