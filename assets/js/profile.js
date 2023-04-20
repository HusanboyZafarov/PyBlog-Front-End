window.addEventListener("scroll", () => {
    let header = document.querySelector("header")
    header.classList.toggle("scrolled", window.scrollY > 0)
})

let header_settings_item_mode = document.querySelector(".header_settings_item.mode")

header_settings_item_mode.addEventListener("click", () => {
    document.querySelector('html').classList.toggle("dark")
    if (document.querySelector('html').className == "dark") {
        localStorage.setItem("mode", "dark")
        localStorage.setItem("icon_class", "fa-sun-bright")
    } else {
        localStorage.setItem("mode", "")
        localStorage.setItem("icon_class", "fa-moon")
    }
    header_settings_item_mode.firstElementChild.classList.toggle("fa-sun-bright")
    header_settings_item_mode.firstElementChild.classList.toggle("fa-moon")
})

window.addEventListener("DOMContentLoaded", () => {
    mode = localStorage.getItem("mode")
    icon = localStorage.getItem("icon_class")
    if (mode) {
        document.querySelector('html').classList.toggle(`${mode}`)
        header_settings_item_mode.firstElementChild.classList.remove("fa-sun-bright")
        header_settings_item_mode.firstElementChild.classList.remove("fa-moon")
        header_settings_item_mode.firstElementChild.classList.add(`${icon}`)
    } else {
        header_settings_item_mode.firstElementChild.classList.remove("fa-sun-bright")
        header_settings_item_mode.firstElementChild.classList.add("fa-moon")
    }
})