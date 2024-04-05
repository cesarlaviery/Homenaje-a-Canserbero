// Important Moments Section

const showPrize = document.querySelectorAll(".important-moments--show");
const hidePrize = document.querySelectorAll(".important-moments--hide");
const informationImportantMoments = document.querySelectorAll(".important-moments__information");

let showClassList = [];
for (element of showPrize) {
    showClassList.push(element);
};

let hideClassList = [];
for (element of hidePrize) {
    hideClassList.push(element);
};

let informationImportantMomentsClassList = [];
for (element of informationImportantMoments) {
    informationImportantMomentsClassList.push(element);
};

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
            informationImportantMomentsClassList[index].classList.add("important-moments__information--opacity");
            showClassList[index].classList.add("important-moments--show-opacity");
            hideClassList[index].classList.add("important-moments--hide-opacity");
        };
    });
};

const hide = (hideElementList, hideElementListNum) => {
    hideClassList.forEach((element, index) => {
        if (hideElementList == hideClassList[index]) {
            informationImportantMomentsClassList[index].classList.remove("important-moments__information--opacity");
            showClassList[index].classList.remove("important-moments--show-opacity");
            hideClassList[index].classList.remove("important-moments--hide-opacity");
        };
    });
};