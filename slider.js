window.addEventListener("DOMContentLoaded", () => {
    new Glider(document.querySelector(".discography-list"), {
        slidesToShow: 1,
        scrollLock: true,
        arrows: {
            prev: '.discography-button--left',
            next: '.discography-button--right'
        }
    });
});