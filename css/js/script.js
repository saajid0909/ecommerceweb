// Scroll to Top Button

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// jQuery Effects

$(document).ready(function () {

    // Fade in cards
    $(".card").hide().fadeIn(1000);

    // Hover animation
    $(".card").hover(
        function () {
            $(this).css({
                transform: "scale(1.03)",
                transition: "0.3s"
            });
        },
        function () {
            $(this).css({
                transform: "scale(1)"
            });
        }
    );

    // Button animation
    $(".btn").hover(
        function () {
            $(this).addClass("shadow");
        },
        function () {
            $(this).removeClass("shadow");
        }
    );

});

// Welcome Message

console.log("Welcome to ShopEasy!");
