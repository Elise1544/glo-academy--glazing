'use strict';

const validation = () => {
  const validationBlocks = document.querySelectorAll('.order-form'),
    nameInput = document.querySelectorAll('.order-form input[name^="fio"]'),
    phoneInput = document.querySelectorAll('.order-form input[name^="phone"]');

  const validateName = () => {
    nameInput.forEach(name => {
      name.addEventListener('input', () => {
        name.value = name.value.replace(/[^а-яa-z]/i, '');
      });
    });
  }
  validateName();

  const validatePhone = () => {
    phoneInput.forEach(phone => {
      phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^\+\d]/, '');
        if (phone.value.length > 16) {
          phone.value = phone.value.substring(0, 15);
        }; 
      });
    });
  }
  validatePhone();

  validationBlocks.forEach(block => {
    block.addEventListener('submit', evt => {
      evt.preventDefault();

    });
  });

}

export default validation;