document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {

      document.querySelector('#menu').classList.toggle('is-active')
    })

    document.querySelectorAll('.nav__link').addEventListener('click', function(ev) {

      ev.querySelector('#menu').classList.remove('is-active')
    })

  })