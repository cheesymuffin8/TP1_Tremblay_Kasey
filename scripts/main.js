let menuButton = document.querySelector("#menuButton")
let sideBar = document.querySelector("#sideBar")

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