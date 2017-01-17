'use strict';
console.log('script.js connected');

window.onload = () => {

  let hamburger = document.getElementById('hamburger')
  let nav = document.querySelector('nav');
  let body = document.querySelector('body');

  function handleHamburgerClick() {
    nav.style.display = 'block';
    nav.className = 'trans';
  }

  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== "SPAN") {
      nav.style.display = 'none';
    }
  }

  function handleNavScroll(e) {

    // define scroll position of each section relative to window.innerHeight
    const viewHeight = window.innerHeight;
    const homeHeight = 0;
    const aboutHeight = viewHeight;
    const projectsHeight = viewHeight * 2;
    const contactHeight = viewHeight * 3;

    // call scrollTo on the intended position
    if (e.target.innerText === 'Home') {
      scrollTo(homeHeight, 300);
    } else if (e.target.innerText === 'About') {
      scrollTo(aboutHeight, 300);
    } else if (e.target.innerText === 'Projects') {
      scrollTo(projectsHeight, 300);
    } else if (e.target.innerText === 'Contact') {
      scrollTo(contactHeight, 300);
    }
  }

  function scrollTo(target, duration) {
    let distance = target - document.body.scrollTop;
    let perTick = (distance/duration) * 10;
    let scroller = setInterval( () => {
      if (duration <= 0 || document.body.scrollTop === target) {
        clearInterval(scroller);
      } else {
        duration -= 10;
        document.body.scrollTop += perTick;
      }
    }, 10)
  }

  // add event listeners
  hamburger.addEventListener('click', handleHamburgerClick);
  body.addEventListener('click', hideNav);
  nav.addEventListener('click', handleNavScroll);
};
