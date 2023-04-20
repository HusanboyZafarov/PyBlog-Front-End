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
let slides = document.querySelectorAll(".main-hero_slide_block")
my_swiper = document.querySelector(".swiper")

window.addEventListener("scroll", () => {
    nums = []
    slides.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    my_swiper.style.height = `${max + 30}px`
})

window.addEventListener("load", () => {
    nums = []
    slides.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    my_swiper.style.height = `${max + 30}px`
})

window.addEventListener("resize", () => {
    nums = []
    slides.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    my_swiper.style.height = `${max + 40}px`
})

let posts_sort_list_opener = document.querySelectorAll(".main-posts_sort_list_opener")
let posts_sort = document.querySelectorAll(".main-posts_sort")

posts_sort_list_opener.forEach(element => {
    index = 0
    element.addEventListener("click", () => {
        nextel = element.nextElementSibling
        if (nextel.style.maxHeight == "0px") {
            posts_sort.forEach(item => {
                item.style.maxHeight = null
                item.style.padding = `0`
                item.style.maxHeight = 0
            });

            nextel.style.padding = `5px 25px`
            nextel.style.maxHeight = `${nextel.scrollHeight}px`

        } else if (nextel.style.maxHeight) {
            posts_sort.forEach(item => {
                item.style.maxHeight = null
                item.style.maxHeight = 0
            });
            setTimeout(() => {
                nextel.style.padding = `0`
            }, 500)
            nextel.style.maxHeight = null
            nextel.style.maxHeight = 0
        } else {
            posts_sort.forEach(item => {
                item.style.maxHeight = null
                item.style.padding = `0`
                item.style.maxHeight = 0
            });

            nextel.style.padding = `5px 25px`
            nextel.style.maxHeight = `${nextel.scrollHeight}px`
        }
    })
});

let posts_sort_item = document.querySelectorAll(".main-posts_sort_item")

posts_sort_item.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("selected")
    })
});