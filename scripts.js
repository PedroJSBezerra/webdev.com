const Navbar = {
    sticky(){
        window.onscroll = function(){setSticky()}

        let nav = document.querySelector('nav')
        let sticky = nav.offsetTop
    
        function setSticky(){
            if(window.pageYOffset > sticky){
                nav.classList.add("navsticky")
            } else {
                nav.classList.remove("navsticky")
            }
        }
    }
}

const Menu = {
    toggle(){
        // get the menu
        const menu = document.querySelector('.menu')
        // get the ul
        const ul = document.querySelector('ul')
        //get the button
        const menuButton = document.querySelector('.navbutton')
        // adiciona um ouvinte de 'click' ao elemento, e executa a função
        menuButton.addEventListener('click', () => {
            menu.style.transform = "none"
        })

        window.onclick = function(event){
            if(event.target == ul){
                menu.style.transform = "translateX(-100%)"
            }
        }
    }
}

const App = {
    init(){
        Navbar.sticky()
        Menu.toggle()
    }
}

App.init()