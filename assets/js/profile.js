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

let closer_wrapper = document.querySelector('.closer_wrapper')
let message = document.querySelector('.message')
let subscribed_wrapper = document.querySelector(".profile-subscribed_wrapper")

closer_wrapper.addEventListener("click", () => {
    message.classList.add("closed")
})

setTimeout(() => {
    message.classList.add("closed")
}, 2000)

let form_bg_closer = document.querySelector(".auth-form_bg_closer")
form_login = document.querySelector(".auth-form.login")
form_register = document.querySelector(".auth-form.register")
let auth_opener_login = document.querySelectorAll(".auth-form_opener")
let auth_opener_register = document.querySelectorAll(".auth-form_opener_register")

auth_opener_login.forEach(element => {
    element.addEventListener("click", () => {
        form_login.classList.add("opened")
        form_register.classList.remove("opened")
        form_bg_closer.classList.add("opened")
    })
})

auth_opener_register.forEach(element => {
    element.addEventListener("click", () => {
        form_login.classList.remove("opened")
        form_register.classList.add("opened")
        form_bg_closer.classList.add("opened")
    })
})

form_bg_closer.addEventListener("click", () => {
    form_register.classList.remove("opened")
    form_login.classList.remove("opened")
    form_bg_closer.classList.remove("opened")
})
