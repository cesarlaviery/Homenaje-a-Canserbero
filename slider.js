window.addEventListener("load", () => {
    new Glider(document.querySelector(".discography-list"), {
        slidesToShow: 1,
        scrollLock: true,
        arrows: {
            prev: '.discography-button--left',
            next: '.discography-button--right'
        }
    });

    new Glider(document.querySelector(".phrases-container"), {
        slidesToShow: 1,
        scrollLock: true,
        dots: ".dots",
        arrows: {
            prev: '.phrases-button--left',
            next: '.phrases-button--right'
        }
    });
});