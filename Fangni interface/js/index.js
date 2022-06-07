// 安裝圖片輪播
var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    direction: getDirection(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        resize: function() {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth
    if (direction <= 960) {
        var swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
        direction = "horizontal"
    } else {
        var swiper = new Swiper(".swiper", {
            slidesPerView: 4,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
        direction = "horizontal"
    }

    return direction;
}