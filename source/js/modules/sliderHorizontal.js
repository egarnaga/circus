const sliderHorizontal = () => {

  let horizontalSlider = new Swiper('.slider-horizontal__container', {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
      el: '.slider-horizontal__pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.slider-horizontal__button-next',
      prevEl: '.slider-horizontal__button-prev'
    },

    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    }
  });
};

export {sliderHorizontal};
