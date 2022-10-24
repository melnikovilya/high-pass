document.addEventListener('DOMContentLoaded', () => {
  // search
  document.querySelector('.open-form').addEventListener('click', () => {
    document.querySelector('.form').classList.remove('animate__fadeOutRight')
    document.querySelector('.form').classList.add('animate__fadeInRight')
    document.querySelector('.form').classList.add('form-active')
  })
  document.querySelector('.close-form').addEventListener('click', () => {
    document.querySelector('.form').classList.remove('animate__fadeInRight')
    document.querySelector('.form').classList.add('animate__fadeOutRight')
    setTimeout(() => {
      document.querySelector('.form').classList.remove('form-active')
    },500)
  })
  // burger
  document.querySelector('.open-nav').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.remove('animate__fadeOutRight')
    document.querySelector('.nav__list').classList.add('animate__fadeInRight')
    document.querySelector('.nav__list').classList.add('nav-active')
  })
  document.querySelector('.close-nav').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.remove('animate__fadeInRight')
    document.querySelector('.nav__list').classList.add('animate__fadeOutRight')
    setTimeout(() => {
      document.querySelector('.nav__list').classList.remove('nav-active')
    },500)
  })
  // map
  ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map("map", {
      center: [55.75737108255844,37.6065004470633],
      zoom: 13,
      controls: []
    });
    let myPlacemark = new ymaps.Placemark([55.76965489933984,37.639601341308556], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/contacts/placemark.png',
      iconImageSize: [12, 12],
      iconImageOffset: [-6, -6]
    })
    myMap.geoObjects.add(myPlacemark)
  }
  // validate
  const studioValidation = new window.JustValidate('#studioForm');
  studioValidation
    .addField('#mail', [
      {
        rule: 'required',
        errorMessage: 'Введите E-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Укажите корректный e-mail',
      }
    ])

  const contactsValidation = new window.JustValidate('#contactsForm');
  contactsValidation
    .addField('#firstname', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'customRegexp',
        value: /[^0-9][^@$!%*#?&^_-]/,
        errorMessage: 'Недопустимый формат',
      }
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Введите E-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Укажите корректный e-mail',
      }
    ])

})
