'use strict';

import callback from './modules/callback';
import Carousel from './modules/carousel';
import measurer from './modules/measurer';

callback();
measurer();

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