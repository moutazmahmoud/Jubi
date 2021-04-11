
// toogle burger menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    nav.classList.toggle('show')
    

  });

  
