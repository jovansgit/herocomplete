!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=12)}([function(e,n){e.exports=function(){var e=document.getElementById("content");let n=document.createElement("div");n.className="w3-bar w3-blue";let t=document.createElement("a");t.className="w3-bar-item w3-button",t.href="#",t.innerHTML="Home",n.append(t);let a=document.createElement("a");a.className=" w3-bar-item w3-button",a.href="#/avengers/vision",a.innerHTML="Vision",n.append(a);let r=document.createElement("a");r.className="w3-bar-item w3-button",r.href="#/avengers/hulk",r.innerHTML="Hulk",n.append(r);let i=document.createElement("a");i.className="w3-bar-item w3-button",i.href="#/avengers/thor",i.innerHTML="Thor",n.append(i);let o=document.createElement("a");o.className="w3-bar-item w3-button",o.href="#/avengers/captain",o.innerHTML="Captain",n.append(o);let s=document.createElement("a");s.className="w3-bar-item w3-button",s.href="#/avengers/spider",s.innerHTML="Spider",n.append(s),e.append(n)}},function(e,n,t){var a=t(9);e.exports=function(e,n){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&200==this.status&&("Vision"==e.name?(e=JSON.parse(this.responseText),a(e[0]),console.log(e[0])):"Hulk"==e.name?(e=JSON.parse(this.responseText),a(e[1]),console.log(e[1])):"Thor"==e.name?(e=JSON.parse(this.responseText),a(e[2]),console.log(e[2])):"Captain America"==e.name?(e=JSON.parse(this.responseText),a(e[3]),console.log(e[3])):"spider-man"==e.name&&(e=JSON.parse(this.responseText),a(e[4]),console.log(e[4])))},t.open("Get","http://jsimmons.tgb2.ninja:4000//"),t.send()}},function(e,n,t){var a=t(7);e.exports=function(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&200==this.status&&1==e.all&&(console.log(JSON.parse(this.responseText)),a(JSON.parse(this.responseText)))},n.open("Get","http://jsimmons.tgb2.ninja:4000"),n.send()}},function(e,n,t){var a=t(0),r=t(2);e.exports=function(){a(),r({all:!0})}},function(e,n,t){var a=t(0),r=(t(2),t(1));e.exports=function(){a(),r({name:"Vision"})}},function(e,n,t){var a=t(0),r=(t(2),t(1));e.exports=function(){a(),r({name:"Captain America"})}},function(e,n,t){var a=t(0),r=t(1);r=t(1);e.exports=function(){a(),r({name:"Hulk"})}},function(e,n){e.exports=function(e){for(var n=0;n<e.length;n++){var t=document.createElement("div");t.className="w3-card-4",t.style.width="35%";var a=document.createElement("img"),r=document.createElement("p");r.innerHTML=e[n].name,r.className="w3-container w3-center",t.append(r);var i=document.createElement("button");if(i.className="w3-button w3-block w3-black",i.style.width="30%",i.innerHTML="Find out more about "+e[n].name,content.append(i),"Hulk"==e[n].name){function o(){window.location.href="http://jsimmons.tgb2.ninja:3000/#/avengers/hulk"}a.src="/assets/hulk.jpg",i.addEventListener("click",o)}else if("Vision"==e[n].name){function s(){window.location.href="http://jsimmons.tgb2.ninja:3000/#/avengers/vision"}a.src="/assets/vision.jpg",i.addEventListener("click",s)}else if("Spider-Man"==e[n].name){function c(){window.location.href="http://jsimmons.tgb2.ninja:3000/#/avengers/spider"}a.src="/assets/spiderman2.jpg",i.addEventListener("click",c)}else if("Thor"==e[n].name){function m(){window.location.href="http://jsimmons.tgb2.ninja:3000/#/avengers/thor"}a.src="/assets/thor.jpg",i.addEventListener("click",m)}else if("Captain America"==e[n].name){function p(){window.location.href="http://jsimmons.tgb2.ninja:3000/#/avengers/captain"}a.src="/assets/captain.jpg",i.addEventListener("click",p)}t.append(a);var l=document.createElement("div");l.className="w3-container w3-center";var u=document.createElement("p");u.innerHTML=e[n].description,l.append(u),t.append(l),content.append(t)}}},function(e,n,t){var a=t(0),r=(t(2),t(1));e.exports=function(){a(),r({name:"Thor"})}},function(e,n){e.exports=function(e){var n=document.createElement("div");n.className="w3-card-4",n.style.width="35%";var t=document.createElement("img"),a=document.createElement("p");a.innerHTML=e.name,a.className="w3-container w3-center",n.append(a);document.createElement("button");var r=document.createElement("p"),i=document.createElement("p");"Hulk"==e.name?(t.src="/assets/hulk.jpg",r.innerHTML="My favorite Hulk comic book is : "+e.comics.items[1].name,i.innerHTML="My favorite hulk series is : "+e.series.items[1].name):"Vision"==e.name?(t.src="/assets/vision.jpg",r.innerHTML="My favorite Vision comic book is : "+e.comics.items[3].name,i.innerHTML="My favorite Vision series is : "+e.series.items[8].name):"Spider-Man"==e.name?(t.src="/assets/spiderman2.jpg",r.innerHTML="My favorite Spider Man comic book is : "+e.comics.items[1].name,i.innerHTML="My favorite Spider Man series is : "+e.series.items[3].name):"Thor"==e.name?(t.src="/assets/thor.jpg",r.innerHTML="My favorite Thor commic book is : "+e.comics.items[2].name,i.innerHTML="My favorite Thor series is : "+e.series.items[1].name):"Captain America"==e.name&&(t.src="/assets/captain.jpg",r.innerHTML="My favorite Captain America comic book is : "+e.comics.items[8].name,i.innerHTML="My favorite Captain America series is : "+e.series.items[4].name),n.append(t);var o=document.createElement("div");o.className="w3-container w3-center",o.append(r),o.append(i),n.append(o),content.append(n)}},function(e,n,t){var a=t(0),r=t(1);e.exports=function(){a(),r({name:"spider-man"})}},function(e,n){e.exports=function(){let e=document.getElementById("content"),n=document.createElement("div");n.className="w3-bar w3-blue";let t=document.createElement("a");t.className="w3-bar-item w3-button",t.href="#",t.innerHTML="Home",n.append(t);let a=document.createElement("a");a.className="w3-bar-item w3-button",a.href="#/avengers",a.innerHTML="Avengers",n.append(a);let r=document.createElement("a");r.className="w3-bar-item w3 button",r.href="#/avengers/vision",r.innerHTML="Vision",n.append(r);let i=document.createElement("a");i.className="w3-bar-item w3 button",i.href="#/avengers/hulk",i.innerHTML="Hulk",n.append(i);let o=document.createElement("a");o.className="w3-bar-item w3 button",o.href="#/avengers/thor",o.innerHTML="Thor",n.append(o);let s=document.createElement("a");s.className="w3-bar-item w3 button",s.href="#/avengers/captain",s.innerHTML="Captain",n.append(s);let c=document.createElement("a");c.className="w3-bar-item w3 button",c.href="#/avengers/spider",c.innerHTML="Spider",n.append(c),e.append(n)}},function(e,n,t){var a=new Navigo("http:jsimmons.tgb2.ninja:3000/#",!0,"#"),r=t(11),i=t(10),o=t(8),s=t(6),c=t(5),m=t(4),p=t(3);t(0),t(2);a.on(function(){document.getElementById("content").innerHTML="",r()}).on({avengers:function(){document.getElementById("content").innerHTML="",p()},"avengers/vision":function(){document.getElementById("content").innerHTML="",m()},"avengers/spider":function(){document.getElementById("content").innerHTML="",i()},"avengers/thor":function(){document.getElementById("content").innerHTML="",o()},"avengers/hulk":function(){document.getElementById("content").innerHTML="",s()},"avengers/captain":function(){document.getElementById("content").innerHTML="",c()}}).resolve()}]);