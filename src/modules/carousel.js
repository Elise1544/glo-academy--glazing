'use strict';

class Carousel {
  constructor({ main, wrap, prev, next, infinity = false, position = 0, slidesToShow = 3, responsive = [] }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.infinity = infinity;
    this.position = position;
    this.slidesToShow = slidesToShow;
    this.widthSlide = Math.floor(100 / this.slidesToShow);
    this.responsive = responsive;
  }

  init() {
    this.addClasses();
    this.addStyle();
    this.controlSlider();

    if (this.responsive) {
      this.responseInit();
    }
  }

  addClasses() {
    this.main.classList.add('carousel')
    this.wrap.classList.add('carousel-wrap');
    for (const item of this.slides) {
      item.classList.add('carousel-item');
    }
  }

  addStyle() {
    let style = document.querySelector('.carousel-style');

    if (!style) {
      style = document.createElement('style');
      style.classList.add('carousel-style');
    }

    style.textContent = `
    .carousel {
      overflow: hidden;
    }
    .carousel-wrap {
      display: flex;
      max-width: 100%;
      transition: transform 0.5s;
      will-change: transform;
    }
    .carousel-item {
      flex: 0 0 ${this.widthSlide}%;
      margin: auto 0;
      max-width: 100%;
    }
    `;

    document.head.append(style);
    // this.wrap.style.transform = `translateX(0)`
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlide.bind(this));
    this.next.addEventListener('click', this.nextSlide.bind(this));
  }

  prevSlide() {
    if (this.infinity || this.position > 0) {
      --this.position;
      if (this.position < 0) {
        this.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `translateX(-${this.position * this.widthSlide}%)`;
    }
  }

  nextSlide() {
    if (this.infinity || this.position < this.slides.length - this.slidesToShow) {
      ++this.position;
      if (this.position > this.slides.length - this.slidesToShow) {
        this.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.position * this.widthSlide}%)`;
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      if (document.documentElement.clientWidth < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (document.documentElement.clientWidth < allResponse[i]) {
            this.position = 0;
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
        this.wrap.style.transform = `translateX(-0%)`;
      }
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);
  }
}

export default Carousel;