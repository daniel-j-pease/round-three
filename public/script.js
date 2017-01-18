'use strict';
console.log('script.js connected');

window.onload = () => {

  const viewHeight = window.innerHeight;
  let hamburger = document.getElementById('hamburger')
  let nav = document.querySelector('nav');
  let body = document.querySelector('body');
  let first = document.querySelector('#first');
  let last = document.querySelector('#last');
  let barOne = document.querySelector('#bar-one');
  let barTwo = document.querySelector('#bar-two');
  let barThree = document.querySelector('#bar-three');
  let posFirst = document.querySelector('#positioner-first');
  let posLast = document.querySelector('#positioner-last');
  let title = document.querySelector('#title');

  function handleHamburgerClick() {
    nav.style.display = 'block';
    hamburger.className = 'opaque';
  }

  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== "SPAN") {
      nav.style.display = 'none';
      hamburger.className = '';
    }
  }

  function handleNavHover(e) {
    console.log(e.target)
    e.target.className = '';
  }

  function handleNavClick(e) {

    console.log(e.target)
    // define scroll position of each section relative to window.innerHeight
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

  function checkHamburger() {
    if (document.body.scrollTop > (viewHeight * 2)) {
      hamburger.childNodes[1].style.backgroundColor = '#355C7D';
      hamburger.childNodes[3].style.backgroundColor = '#355C7D';
      hamburger.childNodes[5].style.backgroundColor = '#355C7D';
    } else {
      hamburger.childNodes[1].style.backgroundColor = '';
      hamburger.childNodes[3].style.backgroundColor = '';
      hamburger.childNodes[5].style.backgroundColor = '';
    }
  }

  function moveBars() {
    let firstBarTop = first.getBoundingClientRect().top + (first.getBoundingClientRect().bottom - first.getBoundingClientRect().top)/3;
    let firstBarLeft = last.getBoundingClientRect().left;
    let lastBarTop = last.getBoundingClientRect().top + (last.getBoundingClientRect().bottom - last.getBoundingClientRect().top)/2;

    let posFirstRight = posFirst.getBoundingClientRect().right;
    let posFirstLeft = posFirst.getBoundingClientRect().left;
    let posLastRight = posLast.getBoundingClientRect().right;

    barOne.style.top = `${firstBarTop}px`;
    barOne.style.left = `${firstBarLeft + 10}px`;
    barOne.style.width = `${posFirstLeft-firstBarLeft - 15}px`

    barTwo.style.top = `${lastBarTop}px`;
    barTwo.style.width = `${posFirstRight - posLastRight - 20}px`
    barTwo.style.left = `${posFirstRight - barTwo.offsetWidth - 10}px`

    barThree.style.top = `${title.getBoundingClientRect().bottom + 5}px`;
    barThree.style.width = `${(title.offsetWidth/2)}px`;
    barThree.style.height = `.3vh`;
    barThree.style.left = `${(window.innerWidth - barThree.offsetWidth)/2}px`;
  }

  // add event listeners
  hamburger.addEventListener('click', handleHamburgerClick);
  body.addEventListener('click', hideNav);
  nav.addEventListener('mouseover', handleNavHover);
  nav.addEventListener('click', handleNavClick);
  window.addEventListener('resize', moveBars)
  window.addEventListener('scroll', checkHamburger);

  moveBars();
};
