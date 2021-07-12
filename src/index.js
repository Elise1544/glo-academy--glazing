'use strict';

import callback from './modules/callback';
import Carousel from './modules/carousel';

callback();


const adventages = new Carousel({
  main: '.benefits-inner',
  wrap: '.benefits-wrap', 
  prev: '.benefits__arrow--left',
  next: '.benefits__arrow--right',
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
  infinity: true
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
  infinity: true
});
services.init();