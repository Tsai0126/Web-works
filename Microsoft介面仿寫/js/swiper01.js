var swiper = new Swiper(".swiper", {

    loop: true, // 循环模式选项
    slidesPerView: 1,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});