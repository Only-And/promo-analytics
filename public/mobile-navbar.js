class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, darkLight) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks)
        this.darkLight = document.querySelector(darkLight);

        this.activeClass = "active"

    }

    animateLinks() {
        this.navLinks.forEach((link, index)=> {
            link.style.animation ? (link.style.animation = '') : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`)
        })
    }

    handleClick() {
        this.mobileMenu.classList.toggle(this.activeClass)
        this.navList.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    handleTheme() {
        document.querySelector('html').classList.toggle('dark-mode')
        if (document.querySelector('html').classList.contains('dark-mode')) {
            document.querySelector('.nav_icon').classList.value = 'uil uil-sun nav_icon'
        } else {
            document.querySelector('.nav_icon').classList.value = 'uil uil-moon nav_icon'
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', () => this.handleClick())
        this.darkLight.addEventListener('click', () => this.handleTheme())

    }

    init () {
        if(this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }

}

const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.menu_ul'
    ,'.menu_ul li',
    '.dark_light',
)

mobileNavbar.init()
