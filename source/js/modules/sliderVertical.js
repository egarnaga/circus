const sliderVertical = () => {

  let headerSlider = new Swiper('.slider__container', {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    }
  });
};

export {sliderVertical};
