// HEADER
const menuBar = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector(".navbar__menu");

menuBar.addEventListener('click', function(){
    menuBar.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})



// Home Name
var typed = new Typed(".auto-type", {
    strings : ["Alphy Balatucan", "Student"],
    typeSpeed : 200,
    backSpeed : 150,
    loop: true,
}); 



// Skills
const skillsSection = document.getElementById("skills-section");
const progressBars = document.querySelectorAll(".progress-bar");

function showProgress(){
    progressBars.forEach(function(progressBar){
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
};
 
function hideProgress(){
    progressBars.forEach(function(p){
        p.style.opacity = 1;
        p.style.width = 0;
    })
};

window.addEventListener('scroll', function(){
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    } else {
        hideProgress();
    }
});



// Service slides
let indexValue = 1;
showImg(indexValue);

function btm_slide(e){
    showImg(indexValue = e);
}

function side_slide(e){
    showImg(indexValue += e);
}

function showImg(e){
    let i;
    const img = document.querySelectorAll('.card-wrapper');
    const sliders = document.querySelectorAll('.btm-sliders span')
    if(e > img.length){
        indexValue = 1;
    }
    if(e < 1){
        indexValue = img.length;
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < sliders.length; i++){
        sliders[i].style.background = "rgb(95, 94, 94)";
    }
    img[indexValue - 1].style.display = "flex"
    sliders[indexValue - 1].style.background = "rgb(250, 166, 10)"
}



