'use strict';

import callback from './modules/callback';
import Carousel from './modules/carousel';
import measurer from './modules/measurer';
import sendForm from './modules/sendForm';
import timer from './modules/timer';
import validation from './modules/validation';
import smoothScroll from './modules/smoothScroll';
import calc from './modules/calc';

callback();
measurer();
timer('19 july 2021');
validation();
calc();
sendForm();
smoothScroll();

const adventages = new Carousel({
  main: '.benefits-inner',
  wrap: '.benefits-wrap', 
  prev: '.benefits__arrow--left',
  next: '.benefits__arrow--right',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      slidesToShow: 3
    },
    {
      breakpoint: 576,
      slidesToShow: 1
    }
  ],
  infinity: true,
  styleName: 'benefits'
});
adventages.init();

const services = new Carousel({
  main: '.services--row',
  wrap: '.services--wrap', 
  prev: '.services__arrow--left',
  next: '.services__arrow--right',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      slidesToShow: 2
    },
    {
      breakpoint: 576,
      slidesToShow: 1
    }
  ],
  infinity: true,
  styleName: 'services'
});
services.init();