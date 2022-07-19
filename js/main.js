window.addEventListener('DOMContentLoaded', () => {
  // AOS 
  AOS.init({
    once: false,
    duration: 700,
  })

  // Scroll
  const nav = document.querySelector('.header-nav')
  const links = nav.querySelectorAll('a[href*="#"')

  $(links).on('click', function(e) {
    const anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 114
    }, 777);
    e.preventDefault()
    return false;
  })

  // Header
  const header = document.querySelector('.header')

  function checkScroll() {
    if (window.scrollY > 2) {
      header.classList.add('header-scroll')
    } else {
      header.classList.remove('header-scroll')
    }
  }

  checkScroll()
  window.addEventListener('scroll', checkScroll)

  // Popup
  function popup(selectorPopupTrigger, selectorPopup, btnClose) {
    const popupTrigger = document.querySelectorAll(selectorPopupTrigger)
    const popup = document.querySelector(selectorPopup)
    const popupBtnClose = popup.querySelector(btnClose)
    const form = popup.querySelector('.form')

    popupTrigger.forEach((link) => {
      if (!link.classList.contains('button-play')) {
        link.addEventListener('click', () => {
          popup.classList.add('active')
          document.body.style.overflow = 'hidden'
          document.body.style.paddingRight = '15px'
        })
      }

      popupBtnClose.addEventListener('click', () => {
        if (popup.classList.contains('active')) {
          popup.classList.remove('active')
          document.body.style.overflow = 'auto'
          document.body.style.paddingRight = '0'
          form.reset()
        }
      })

      popup.addEventListener('click', (e) => {
        const target = e.target
    
        if (target.classList.contains('popup')) {
          popup.classList.remove('active')
          document.body.style.overflow = 'auto'
          document.body.style.paddingRight = '0'
          form.reset()
        }
      })
    })
  }
  
  popup('main a', '.popup', '.popup__close')
  popup('.header-signup__link', '.popup-signup', '.btn__close')

  // Mask form
  $("#phone").mask("+7 (999) - 999 - 9999")

  // Mobile nav
  const mobNavBtn = document.querySelector('.mobile-nav-button')
  const mobNavIcon = document.querySelector('.mobile-nav-button__icon')
  const mobNav = document.querySelector('.mobile-nav')

  mobNavBtn.addEventListener('click', () => {
    mobNavIcon.classList.toggle('active')
    mobNav.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
  })
})