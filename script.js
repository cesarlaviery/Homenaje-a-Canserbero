// Important Moments Section

const showPrize = document.querySelectorAll(".important-moments--show");
const hidePrize = document.querySelectorAll(".important-moments--hide");
const ImportantMoments = document.querySelectorAll(".important-moments__information");

const incrementClassList = (nodeList, classList) => {
    for (element of nodeList) {
        classList.push(element);
    };
};

let showClassList = [];
incrementClassList(showPrize, showClassList);
let hideClassList = [];
incrementClassList(hidePrize, hideClassList);
let ImportantMomentsClassList = [];
incrementClassList(ImportantMoments, ImportantMomentsClassList);

showClassList.forEach((element, index) => {
    showClassList[index].addEventListener("click", () => {
        show(showClassList[index], index);
    });
});

hideClassList.forEach((element, index) => {
    hideClassList[index].addEventListener("click", () => {
        hide(hideClassList[index], index);
    });
});

const show = (showElementList, hideElementListNum) => {
    showClassList.forEach((element, index) => {
        if (showElementList == showClassList[index]) {
            ImportantMomentsClassList[index].classList.add("important-moments__information--opacity");
            showClassList[index].classList.add("important-moments--show-opacity");
            hideClassList[index].classList.add("important-moments--hide-opacity");
        };
    });
};

const hide = (hideElementList, hideElementListNum) => {
    hideClassList.forEach((element, index) => {
        if (hideElementList == hideClassList[index]) {
            ImportantMomentsClassList[index].classList.remove("important-moments__information--opacity");
            showClassList[index].classList.remove("important-moments--show-opacity");
            hideClassList[index].classList.remove("important-moments--hide-opacity");
        };
    });
};

// Phrases Section

window.addEventListener("scroll", () => {
    const phrasesAnimation = document.querySelectorAll(".phrases");

    let phrasesClassList = [];
    for (element of phrasesAnimation) {
        phrasesClassList.push(element);
    };

    for (let i = 0; i < phrasesClassList.length; i++) {
        const phrasesAnimationPosition = phrasesClassList[i].getBoundingClientRect().top;
        const screenSize = window.innerHeight / 1.1;

        if (phrasesAnimationPosition < screenSize) {
            phrasesAnimation[i].style = "animation: show 1s ease-out both"
        } else {
            phrasesAnimation[i].style = "animation: hide 1s ease-out both"
        }
    }
});