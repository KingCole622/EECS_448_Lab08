var slideNum = 1;

function nextSlide() {
    if (slideNum == 1) {
        var curSlide = document.getElementById("slide1");
        var nextSlide = document.getElementById("slide2");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 2) {
        var curSlide = document.getElementById("slide2");
        var nextSlide = document.getElementById("slide3");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 3) {
        var curSlide = document.getElementById("slide3");
        var nextSlide = document.getElementById("slide4");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 4) {
        var curSlide = document.getElementById("slide4");
        var nextSlide = document.getElementById("slide5");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 5) {
        var curSlide = document.getElementById("slide5");
        var nextSlide = document.getElementById("slide1");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    }

    if (slideNum < 5) {
        slideNum = slideNum + 1;
    } else {
        slideNum = 1;
    }

}

function prevSlide() {
    if (slideNum == 1) {
        var curSlide = document.getElementById("slide1");
        var nextSlide = document.getElementById("slide5");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 2) {
        var curSlide = document.getElementById("slide2");
        var nextSlide = document.getElementById("slide1");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 3) {
        var curSlide = document.getElementById("slide3");
        var nextSlide = document.getElementById("slide2");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 4) {
        var curSlide = document.getElementById("slide4");
        var nextSlide = document.getElementById("slide3");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    } else if (slideNum == 5) {
        var curSlide = document.getElementById("slide5");
        var nextSlide = document.getElementById("slide4");
        curSlide.style.width = "0vw";
        curSlide.style.height = "0vh";
        nextSlide.style.width = "80vw";
        nextSlide.style.height = "80vh";
    }

    if (slideNum > 1) {
        slideNum = slideNum - 1;
    } else {
        slideNum = 5;
    }

}