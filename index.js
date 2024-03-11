const skillsTech = document.querySelector(".skills-tech")

const skills = [
    {
        path: "img/vsc.svg",
        name: "Vs Code"
    },

    {
        path: "img/java.svg",
        name: "Java"
    },

    {
        path: "img/html.svg",
        name: "Html"
    },
    {
        path: "img/css.svg",
        name: "Css"
    },
    {
        path: "img/javascript.svg",
        name: "JsCript"
    },
    {
        path: "img/bash.svg",
        name: "Bash"
    },
    {
        path: "img/slack.svg",
        name: "Slack"
    },
    {
        path: "img/git.svg",
        name: "Git"
    },
    {
        path: "img/c++.svg",
        name: "C++"
    },
    {
        path: "img/sqloff.svg",
        name: "Sql"
    },
    {
        path: "img/apacheoff.svg",
        name: "Netbeans"
    },
    {
        path: "img/mysql.svg",
        name: "Mysql"
    },
    {
        path: "img/react.svg",
        name: "React"
    },
    {
        path: "img/github.svg",
        name: "GitHub"
    },
]

let str = ""

for (const skill of skills) {
    str += `
    <div class="skill">
        <img src="${skill.path}" alt="${skill.name}">
        <h3>${skill.name}</h3>
    </div>`
}

skillsTech.innerHTML = str

/* NAVBAR */

const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".menu")
const links = document.querySelector(".menu-item")

navbar.addEventListener("click", function(e){
    if(e.target.closest(".btn-open")){
        menu.classList.toggle("show-menu")
    }

    if(e.target.closest(".btn-close")){
        menu.classList.remove("show-menu")
    }

    if(e.target.closest(".menu-item")){
        menu.classList.remove("show-menu")
    }

})

/* LIGHT MODE */

const btnLight = document.querySelector(".btn-theme")

const theme = window.localStorage.getItem("theme")

if(theme){
    document.body.classList.add("light")
    btnLight.firstElementChild.classList.remove("bxs-moon")
    btnLight.firstElementChild.classList.add("bxs-sun")
}else{
    document.body.classList.remove("light")
    btnLight.firstElementChild.classList.remove("bxs-sun")
    btnLight.firstElementChild.classList.add("bxs-moon")
}




btnLight.addEventListener("click", function () {
    document.body.classList.toggle("light")

    if(document.body.classList.contains("light")){
        changeTheme(true)
    }else{
        changeTheme(false)
    }

})

function changeTheme (bool){
    if(bool){
        btnLight.firstElementChild.classList.remove("bxs-moon")
        btnLight.firstElementChild.classList.add("bxs-sun")
        window.localStorage.setItem("theme","light")
    }else{
        btnLight.firstElementChild.classList.remove("bxs-sun")
        btnLight.firstElementChild.classList.add("bxs-moon")
        window.localStorage.removeItem("theme")
    }
}

/* SCROLL SECTION */

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu-link");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const targetId = this.getAttribute("href"); // Obtener el ID de la sección a la que debe desplazarse
            const targetSection = document.querySelector(targetId); // Obtener la sección correspondiente

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" }); // Desplazarse suavemente a la sección

                // Calcular la posición del título de la sección y ajustar el desplazamiento manualmente
                const headerOffset = 100; // Ajusta este valor según sea necesario
                const targetHeader = targetSection.querySelector("h2");
                if (targetHeader) {
                    const headerPosition = targetHeader.getBoundingClientRect().top;
                    window.scrollTo({
                        top: window.scrollY - headerOffset + headerPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    // Agrega evento de clic al logotipo
    const logoLink = document.querySelector(".logo");
    if (logoLink) {
        logoLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const heroSection = document.getElementById("hero"); // Obtener la sección #hero

            if (heroSection) {
                const heroHeight = heroSection.getBoundingClientRect().height;
                window.scrollTo({ top: -heroHeight, behavior: "smooth" }); // Desplazarse suavemente al inicio del hero
            }
        });
    }
});