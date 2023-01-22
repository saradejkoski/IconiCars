const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    // variable if user is logged in, JSON to Text.
    const isLoggedIn = JSON.parse(this.responseText);
    if (isLoggedIn) {
        // If user gets logged in -> getElementByID(userLoggedIn)
        document.getElementById("logout-btn").style.setProperty('visibility', "visible");
        document.getElementById("login-btn").style.setProperty('visibility', "hidden");
    } else {
        // If not, the user goes to Registration.
        document.getElementById("login-btn").style.setProperty('visibility', "visible");
        document.getElementById("logout-btn").style.setProperty('visibility', "hidden");
    }
};

xhttp.open("GET", "getProfile");
xhttp.send();

// Variables for Login and Registration. (from html)
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const logoutButton = document.getElementById("logout-btn");
const sendButton = document.getElementById("sendButton");


/*
     After Logout we want to see the first screen again, so we set the tag "userLoggedIn" to hidden
     and the tag "login" to visible.
     */

logoutButton.addEventListener("click", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("logout-btn").style.setProperty('visibility', "hidden");
        document.getElementById("login-btn").style.setProperty('visibility', "visible");
    };
    xhttp.open("DELETE", "session");
    xhttp.send();
});

loginButton.addEventListener("click", () => {

    var email = emailInput.value;
    var password = passwordInput.value;


    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(JSON.parse(this.responseText).status);
        var isLoggedIn = JSON.parse(this.responseText).status;
        if (isLoggedIn) {
            // If Login is successful set "login-btn" tag to visible and "logout-btn" tag to hidden.
            alert("Willkommen!");
            document.getElementById("logout-btn").style.setProperty('visibility', "visible");
            document.getElementById("login-btn").style.setProperty('visibility', "hidden");

            // After logging out email and password fields are empty.
            passwordInput.value = "";
            emailInput.value = "";
        } else {
            alert("Password oder Email ist falsch!");
            document.getElementById("logout-btn").style.setProperty('visibility', "hidden");
            document.getElementById("login-btn").style.setProperty('visibility', "visible");
        }
    };
    // With POST method email and password are sent.
    xhttp.open("POST", "login");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({email, password}));
});

registerButton.addEventListener("click", () => {
    var email = emailInput.value;
    var password = passwordInput.value;
    if (password.length < 10) {
        alert("Error: Password must be at least 10 characters");
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(JSON.parse(this.responseText).status);
        var isLoggedIn = JSON.parse(this.responseText).status;
        if (isLoggedIn) {
            alert("Willkommen auf unserer Platform!");
            document.getElementById("logout-btn").style.setProperty('visibility', "visible");
            document.getElementById("login-btn").style.setProperty('visibility', "hidden");

            passwordInput.value = "";
            emailInput.value = "";
        } else {
            alert("Email bereits vorhanden");
            document.getElementById("logout-btn").style.setProperty('visibility', "hidden");
            document.getElementById("login-btn").style.setProperty('visibility', "visible");
        }
    };
    xhttp.open("POST", "register");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({email, password}));
});


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}


window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
    ;

};


document.querySelector('.home').onmouseleave = (e) => {

    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });

};

var swiper = new Swiper(".vehicles-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

