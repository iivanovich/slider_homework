
const slider = document.querySelector(".right_img");
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const titleOne = document.querySelector(".one");
const titleTwo = document.querySelector(".two");
const titleThree = document.querySelector(".three");
const textOne = document.querySelector(".block_one_text");
const textTwo = document.querySelector(".block_two_text");
const textThree = document.querySelector(".block_three_text");
const circleOne = document.querySelector(".one_circle_img");
const circleTwo = document.querySelector(".two_circle_img");
const circleThree = document.querySelector(".three_circle_img");


sliderItems.forEach(function (slide, index) {

    if (index !== 0) {
        slide.classList.add("hidden");
    }

    slide.dataset.index = index;
    sliderItems[0].setAttribute("data-active", "");

})
btnNext.onclick = function () {
    showNextSlide("next")
}
btnPrev.onclick = function () {
    showNextSlide("prev")
}
circleOne.onclick = function () {
    showNextSlide("one")
};
circleTwo.onclick = function () {
    showNextSlide("two")
};
circleThree.onclick = function () {
    showNextSlide("three")
};
titleOne.onclick = function () {
    showNextSlide("one")
}
titleTwo.onclick = function () {
    showNextSlide("two")
}
titleThree.onclick = function () {
    showNextSlide("three")
}


function showNextSlide(direction) {

    const currentSlide = slider.querySelector("[data-active]");
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add("hidden");
    currentSlide.removeAttribute("data-active");

    let nextSlideIndex;
    if (direction === "next") {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === "prev") {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    } else if (direction === "one") {
        nextSlideIndex = 0;
    } else if (direction === "two") {
        nextSlideIndex = 1;
    } else if (direction === "three") {
        nextSlideIndex = 2;
    }


    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

    if (nextSlideIndex === 0) {
        titleOne.classList.add("active");
        titleTwo.classList.remove("active");
        titleThree.classList.remove("active");
        textOne.innerHTML = "Rostov-on-Don LCD admiral";
        textTwo.innerHTML = "81 m2";
        textThree.innerHTML = "3.5 months";
        circleOne.classList.add("active_circle");
        circleTwo.classList.remove("active_circle");
        circleThree.classList.remove("active_circle");
    } else if (nextSlideIndex === 1) {
        titleOne.classList.remove("active");
        titleTwo.classList.add("active");
        titleThree.classList.remove("active");
        textOne.innerHTML = "Sochi Thieves";
        textTwo.innerHTML = "105 m2";
        textThree.innerHTML = "4 months";
        circleOne.classList.remove("active_circle");
        circleTwo.classList.add("active_circle");
        circleThree.classList.remove("active_circle");
    } else if (nextSlideIndex === 2) {
        titleOne.classList.remove("active");
        titleTwo.classList.remove("active");
        titleThree.classList.add("active");
        textOne.innerHTML = "Rostov-on-Don Patriotic";
        textTwo.innerHTML = "93 m2";
        textThree.innerHTML = "3 months";
        circleOne.classList.remove("active_circle");
        circleTwo.classList.remove("active_circle");
        circleThree.classList.add("active_circle");
    }
}

