window.addEventListener("DOMContentLoaded", () => {
    new Glider(document.querySelector(".discography-list"), {
        slidesToShow: 1,
        scrollLock: true,
        arrows: {
            prev: '.discography-button--left',
            next: '.discography-button--right'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 768,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '2'
                }
            }
        ]
    });
});