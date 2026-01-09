let nextbtn         = document.getElementById('righticon');
let prevbtn         = document.getElementById('lefticon');
let slidercontainer = document.getElementById('sliderbox');
let sliderheadtext  = document.getElementById('sliderheadtext');
let sliderinfo      = document.getElementById('sliderinfo');

let images = [
    "url(src/img/slider-3-min.png)",
    "url(src/img/slider-4-min.png)",
];

let texts = [
    {
        head: "Fresh Vegetables<br/> Big discount",
        info: "Sign up for the daily newsletter"
    },

    {
        head: "Don't miss amazing <br/> grocery deals",
        info: "Sign up for the daily newsletter"
    }
];


let currentindex = 0;

function slider() {
    if (currentindex >= images.length) {
        currentindex = 0;
    } else if (currentindex < 0) {
        currentindex = images.length - 1;
    }
    slidercontainer.style.backgroundImage = images[currentindex];
    sliderheadtext.innerHTML = texts[currentindex].head;
    sliderinfo.innerHTML     = texts[currentindex].info;

}

nextbtn.addEventListener('click', function () {
    currentindex++;
    slider();
});

prevbtn.addEventListener('click', function () {
    currentindex--;
    slider();
});




slider();



let autoslide = setInterval(function(){
    currentindex++;
    slider();
}, 10000);

slidercontainer.addEventListener('mouseover', function(){
    clearInterval(autoslide);
});

slidercontainer.addEventListener('mouseout', function(){
    autoslide = setInterval(function(){
        currentindex++;
        slider();
    }, 10000);
});

