const sliderVertical = () => {

  let verticalSlider = new Swiper('.slider__container', {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev'
    },

    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    }
  });
};

export {sliderVertical};
