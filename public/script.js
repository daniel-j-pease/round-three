'use strict';
console.log('script.js connected');

window.onload = () => {

  const viewHeight = window.innerHeight;
  let hamburger = document.getElementById('hamburger')
  let nav = document.querySelector('nav');
  let about = document.querySelector('#about')
  let body = document.querySelector('body');

  function handleHamburgerOver() {
    hamburger.style.height = '71px';
    hamburger.style.width = '71px';
  }

  function handleHamburgerLeave() {
    hamburger.style.height = '70px';
    hamburger.style.width = '70px';
  }

  function handleNavClick() {
    nav.style.display = 'block';
    hamburger.removeEventListener('mouseover', handleHamburgerOver);
  }

  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== "SPAN") {
      nav.style.display = 'none';
      hamburger.addEventListener('mouseover', handleHamburgerOver);
    }
  }

  function handleNavScroll(e) {
    if (e.target.innerText === 'About') {
      document.body.scrollTop = viewHeight;
    } else if (e.target.innerText === 'Projects') {
      document.body.scrollTop = viewHeight * 2;
    } else if (e.target.innerText === 'Contact') {
      document.body.scrollTop = viewHeight * 3;
    }
  }

  function scrollTo(destination) {
    // set timeout here
  }

  // add event listeners
  hamburger.addEventListener('mouseover', handleHamburgerOver);
  hamburger.addEventListener('mouseleave', handleHamburgerLeave);
  hamburger.addEventListener('click', handleNavClick);

  body.addEventListener('click', hideNav);
  nav.addEventListener('click', handleNavScroll);

  document.addEventListener('scroll', () => {
    console.log(document.body.scrollTop)
  })
}
