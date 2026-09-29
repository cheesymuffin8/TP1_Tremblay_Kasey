let menuButton = document.querySelector("#menuButton")
let sideBar = document.querySelector("#sideBar")
let gameGrid = document.querySelector("#gameGrid")
let gameTiles = document.querySelectorAll(".gameTile")

let sideBarOpened = false

menuButton.addEventListener("click", () => {
    if (sideBarOpened == false) {
        sideBar.style.right = "0"
        sideBarOpened = true
    } else {
        sideBar.style.right = "-155px"
        sideBarOpened = false
    }
})

for (const [id, data] of Object.entries(games)) {
    let gameTile = document.createElement("div")
    gameTile.className = "gameTile"
    gameGrid.appendChild(gameTile)

    let coverArt = document.createElement("img")
    coverArt.draggable = false
    coverArt.src = "images/gameCovers/"+id+".avif"
    gameTile.appendChild(coverArt)

    let gameName = document.createElement("div")
    gameName.className = "gameName"
    gameTile.appendChild(gameName)
    
    let gameNameText = document.createElement("div")
    gameNameText.innerText = data.name
    gameName.appendChild(gameNameText)

    gameTile.addEventListener("click", () => {
        window.location.href = `jeu.html?id=${id}`;
    })
}