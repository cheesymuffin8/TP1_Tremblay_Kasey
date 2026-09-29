const id = new URLSearchParams(window.location.search).get("id");
let game = games[id];
const pageTitle = document.querySelector("title");

pageTitle.innerText = game.name

document.querySelector("h4").innerText = game.desc
document.querySelector("h1").innerText = game.name
document.querySelector("h2").innerText = "Développement: "+game.dev
document.querySelector("h3").innerText = "Édition: "+game.dev
document.querySelector("h5").innerText = "Sortie le "+game.date
document.querySelector("#gameThumbnail").src = "images/gameThumbnails/"+id+".avif"
document.querySelector("#price").innerText = game.price+"$"