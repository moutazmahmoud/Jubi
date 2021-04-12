
// toogle burger menu

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    nav.classList.toggle('show')
    

  });


// nav Links background color and font color changing

  document.querySelectorAll('#nav-link').forEach((link)=>{
    link.addEventListener('click', () => {
      let children1 = link.parentElement.children;
        for(var i = 0 ; i < children1.length ; i++){
          children1[i].classList.remove('red-back');
          children1[i].firstElementChild.classList.remove('white');
        }
        link.classList.add('red-back');
        link.firstElementChild.classList.add('white');
        nav.classList.remove('show');
        burger.classList.remove('toggle');
        

        
    })
});


// top button - when click => all nav links get to the first style  

document.getElementById('top').addEventListener('click',()=>{
  const navLinks = document.getElementById('nav-links');
  console.log(navLinks.children);
  for(var i = 0 ; i < navLinks.children.length ; i++){
    navLinks.children[i].classList.remove('red-back');
    navLinks.children[i].firstElementChild.classList.remove('white');
  }
})
