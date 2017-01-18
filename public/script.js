'use strict';
console.log('script.js connected');

window.onload = () => {

  // capture viewHeight for use in style calculations
  const viewHeight = window.innerHeight;

  //decare variables
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
  let twitter = document.querySelector('#twitter');
  let github = document.querySelector('#github');
  let linkedin = document.querySelector('#linkedin');
  let title = document.querySelector('#title');

  barOne.style.display = 'block';
  barTwo.style.display = 'block';
  barThree.style.display = 'block';

  function handleHamburgerClick() {
    nav.style.display = 'block';
    nav.className = 'reveal';
  }

  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== "SPAN") {
      nav.className = '';
    }
    if (e.target.className === 'not') {
      nav.className = '';
    }
  }

  function handleNavClick(e) {

    // define scroll position of each section relative to window.innerHeight
    const homeHeight = 0;
    const aboutHeight = viewHeight;
    const projectsHeight = viewHeight * 2;
    const contactHeight = viewHeight * 4;

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
    if (document.body.scrollTop > (viewHeight * 3)) {
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
    // barOne.style.height = `.3vh`;

    barTwo.style.top = `${lastBarTop}px`;
    barTwo.style.width = `${posFirstRight - posLastRight - 20}px`
    barTwo.style.left = `${posFirstRight - barTwo.offsetWidth - 10}px`
    // barTwo.style.height = `.3vh`;

    barThree.style.top = `${title.getBoundingClientRect().bottom + 5}px`;
    barThree.style.width = `${(title.offsetWidth/2)}px`;
    barThree.style.left = `${(window.innerWidth - barThree.offsetWidth)/2}px`;
    // barThree.style.height = `.3vh`;
  }

  function handleSocialClick(e) {
    if (e.target.id === 'twitter') {
      window.open('https://twitter.com/cantthinkofpun', '_blank');
    } else if (e.target.id === 'github') {
      window.open('https://github.com/daniel-j-pease', '_blank');
    } else {
      window.open('https://www.linkedin.com/in/daniel-pease', '_blank');
    }
  }

  // add event listeners
  twitter.addEventListener('click', handleSocialClick);
  github.addEventListener('click', handleSocialClick);
  linkedin.addEventListener('click', handleSocialClick);
  hamburger.addEventListener('click', handleHamburgerClick);
  body.addEventListener('click', hideNav);
  nav.addEventListener('click', handleNavClick);
  window.addEventListener('resize', moveBars)
  window.addEventListener('scroll', checkHamburger);

  moveBars();
};
