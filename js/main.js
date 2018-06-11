var root = 'http:jsimmons.tgb2.ninja:3000/#';
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
var HomePage = require('./web-pages/home-page.js')
var spider = require('./web-pages/spider.js')
var thor = require('./web-pages/thor.js')
var hulk = require('./web-pages/hulk.js')
var captain = require('./web-pages/captain.js')
var vision = require('./web-pages/vision.js')
var allAvengers = require('./web-pages/avengers.js')
var Menu = require('./web-components/menu-component.js')
var getAvengers = require('./web-components/avenger-component.js')
router
  .on(function() {
  document.getElementById('content').innerHTML =''
    HomePage()
  })
.on({
   'avengers': function() {
  document.getElementById('content').innerHTML =''
     allAvengers()
   }, 
  'avengers/vision': function() {
  document.getElementById('content').innerHTML =''
    vision()
  },
 'avengers/spider' : function() {
   document.getElementById('content').innerHTML =''
  spider()
  },
  'avengers/thor': function() {
    document.getElementById('content').innerHTML =''
   thor()
  },
  'avengers/hulk': function() {
    document.getElementById('content').innerHTML =''
    hulk()
  },
  'avengers/captain': function() {
    document.getElementById('content').innerHTML =''
    captain()
  }
   })
 .resolve();
