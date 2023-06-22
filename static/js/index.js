function enlargeImage(img) {
    var enlargedImg = document.createElement("div");
    enlargedImg.className = "enlarged-img";
    enlargedImg.innerHTML = '<img src="' + img.src + '" alt="">';
    document.body.appendChild(enlargedImg);

    enlargedImg.onclick = function () {
        document.body.removeChild(enlargedImg);
    };
}

var menu = document.getElementById("menu");
function openmenu() {
    menu.style.right = "0%";
}

function closemenu() {
    menu.style.right = "-100%";
}

navbtn = document.querySelectorAll("header nav ul li")

function btn() {
    menu.style.right = "-100%"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxjG4q6_0T5w8NY7wmxAAQmnJOq10cR9SFcjqjPh8Gqw6HnZW7efEM7DdoYz-RSgK_lkg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const credentials = document.getElementsByClassName(".input");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank's for Messaging i will get back to you soon..."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
