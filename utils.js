function createBar() {
    let navebarBackground = document.getElementById("navebarBackground");

    window.addEventListener('scroll', function () {


        if (this.window.scrollY > 0) {
            navebarBackground.style.display = "flex";

        }
        else {
            navebarBackground.style.display = "none";
        }
    });
}

function selected(button) {

    button.style.backgroundColor = "#F5B63F";
    button.style.borderRadius = "1.9vw";
    button.style.padding = " 0.6vw 1.4vw";
}

function deselected(button) {

    button.style.backgroundColor = "transparent";
    button.style.borderRadius = "100%";
    button.style.padding = "0.5vw 0.7vw";
}


function changeImagesArt() {
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let image4 = document.getElementById("image4");
    let image5 = document.getElementById("image5");
    let image6 = document.getElementById("image6");

    let buttonArt = document.getElementById("buttonArt");
    let buttonConcept = document.getElementById("buttonConcept");
    let buttonWeb = document.getElementById("buttonWeb");

    selected(buttonArt);

    deselected(buttonConcept);
    deselected(buttonWeb);
    
    image1.style.opacity = 0;
    image2.style.opacity = 0;
    image3.style.opacity = 0;
    image4.style.opacity = 0;
    image5.style.opacity = 0;
    image6.style.opacity = 0;

    setTimeout(function () {
        image1.src = "imagens/portfolio-website-2.jpg";
        image1.style.opacity = 1;

        image2.src = "imagens/portfolio-website-2.jpg";
        image2.style.opacity = 1;

        image3.src = "imagens/portfolio-website-2.jpg";
        image3.style.opacity = 1;

        image4.src = "imagens/portfolio-website-2.jpg";
        image4.style.opacity = 1;

        image5.src = "imagens/portfolio-website-2.jpg";
        image5.style.opacity = 1;

        image6.src = "imagens/portfolio-website-2.jpg";
        image6.style.opacity = 1;

    }, 500);

    return;
}

function changeImagesConcept() {
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let image4 = document.getElementById("image4");
    let image5 = document.getElementById("image5");
    let image6 = document.getElementById("image6");

    let buttonArt = document.getElementById("buttonArt");
    let buttonConcept = document.getElementById("buttonConcept");
    let buttonWeb = document.getElementById("buttonWeb");

    selected(buttonConcept);

    deselected(buttonArt);
    deselected(buttonWeb);

    image1.style.opacity = 0;
    image2.style.opacity = 0;
    image3.style.opacity = 0;
    image4.style.opacity = 0;
    image5.style.opacity = 0;
    image6.style.opacity = 0;


    setTimeout(function () {
        image1.src = "imagens/portfolio-website-1.jpg";
        image1.style.opacity = 1;

        image2.src = "imagens/portfolio-website-1.jpg";
        image2.style.opacity = 1;

        image3.src = "imagens/portfolio-website-1.jpg";
        image3.style.opacity = 1;

        image4.src = "imagens/portfolio-website-1.jpg";
        image4.style.opacity = 1;

        image5.src = "imagens/portfolio-website-1.jpg";
        image5.style.opacity = 1;

        image6.src = "imagens/portfolio-website-1.jpg";
        image6.style.opacity = 1;

    }, 500);


    return;
}

function changeImagesWeb() {
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let image4 = document.getElementById("image4");
    let image5 = document.getElementById("image5");
    let image6 = document.getElementById("image6");

    let buttonArt = document.getElementById("buttonArt");
    let buttonConcept = document.getElementById("buttonConcept");
    let buttonWeb = document.getElementById("buttonWeb");

    selected(buttonWeb);
    deselected(buttonConcept);
    deselected(buttonArt);

    image1.style.opacity = 0;
    image2.style.opacity = 0;
    image3.style.opacity = 0;
    image4.style.opacity = 0;
    image5.style.opacity = 0;
    image6.style.opacity = 0;

    setTimeout(function () {
        image1.src = "imagens/portfolio-website-3.jpg";
        image1.style.opacity = 1;

        image2.src = "imagens/portfolio-website-3.jpg";
        image2.style.opacity = 1;

        image3.src = "imagens/portfolio-website-3.jpg";
        image3.style.opacity = 1;

        image4.src = "imagens/portfolio-website-3.jpg";
        image4.style.opacity = 1;

        image5.src = "imagens/portfolio-website-3.jpg";
        image5.style.opacity = 1;

        image6.src = "imagens/portfolio-website-3.jpg";
        image6.style.opacity = 1;

    }, 500);

    return;
}

function carrossel() {
    const imageChangeFunctions = [changeImagesWeb, changeImagesArt, changeImagesConcept];

    let currentIndex = 0;

    function cycleImageChange() {
        imageChangeFunctions[currentIndex]();

        currentIndex = (currentIndex + 1) % imageChangeFunctions.length;
    }

    cycleImageChange();

    setInterval(cycleImageChange, 7000);
}

function moreHome(){
    let buttonMore = document.getElementById("buttonMoreHome");
    let text = document.getElementById("moreText-home");

    if (buttonMore.textContent === "MAIS") {
        buttonMore.textContent = "MENOS";
        text.style.display = "flex";
    } else {
        buttonMore.textContent = "MAIS";
        text.style.display = "none";
    }
}

function moreExperience(){
    let buttonMore = document.getElementById("buttonMore-experience");
    let text = document.getElementById("textMore-experience");

    if (buttonMore.textContent === "MAIS") {
        buttonMore.textContent = "MENOS";
        text.style.display = "flex";
        text.style.flexDirection = "column";
    } else {
        buttonMore.textContent = "MAIS";
        text.style.display = "none";
    }
}

function moreEducation(){
    let buttonMore = document.getElementById("buttonMore-education");
    let text = document.getElementById("textMore-education");

    if (buttonMore.textContent === "MAIS") {
        buttonMore.textContent = "MENOS";
        text.style.display = "flex";
        text.style.flexDirection = "column";
    } else {
        buttonMore.textContent = "MAIS";
        text.style.display = "none";
    }
}

