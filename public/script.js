/* eslint no-undef: 0 */
window.onload = () => {
  // capture viewHeight for use in style calculations
  const viewHeight = window.innerHeight;

  // decare variables
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const barOne = document.querySelector("#bar-one");
  const barTwo = document.querySelector("#bar-two");
  const barThree = document.querySelector("#bar-three");
  const posFirst = document.querySelector("#positioner-first");
  const posLast = document.querySelector("#positioner-last");
  const twitter = document.querySelector("#twitter");
  const github = document.querySelector("#github");
  const linkedin = document.querySelector("#linkedin");
  const title = document.querySelector("#title");
  const projectOne = document.querySelector("#project-one-container");
  const projectTwo = document.querySelector("#project-two-container");
  const projectThree = document.querySelector("#project-three-container");

  const projectOneContainer = document.querySelector("#project-one-container");


  // define scroll position of each section relative to window.innerHeight
  const homeHeight = 0;
  const aboutHeight = viewHeight - (viewHeight / 7);
  const projectsHeight = (viewHeight * 2) - (viewHeight / 10);
  const contactHeight = viewHeight * 4;

  barOne.style.display = "block";
  barTwo.style.display = "block";
  barThree.style.display = "block";

  function handleHamburgerClick() {
    nav.style.display = "block";
    nav.className = "reveal";
  }

  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== "SPAN") {
      nav.className = "";
    }
    if (e.target.className === "not") {
      nav.className = "";
    }
  }

  function scrollTo(target, duration) {
    const distance = target - document.body.scrollTop;
    const perTick = distance / duration * 10;
    const scroller = setInterval(
      () => {
        if (duration <= 0 || document.body.scrollTop === target) {
          clearInterval(scroller);
        } else {
          duration -= 10;
          document.body.scrollTop += perTick;
        }
      },
      10
    );
  }

  function handleNavClick(e) {

    // call scrollTo on the intended position
    if (e.target.innerText === "Home") {
      scrollTo(homeHeight, 300);
    } else if (e.target.innerText === "About") {
      scrollTo(aboutHeight, 300);
    } else if (e.target.innerText === "Projects") {
      scrollTo(projectsHeight, 300);
    } else if (e.target.innerText === "Contact") {
      scrollTo(contactHeight, 300);
    }
  }

  function checkHamburger() {
    if (document.body.scrollTop > viewHeight * 3) {
      hamburger.childNodes[1].style.backgroundColor = "#355C7D";
      hamburger.childNodes[3].style.backgroundColor = "#355C7D";
      hamburger.childNodes[5].style.backgroundColor = "#355C7D";
    } else {
      hamburger.childNodes[1].style.backgroundColor = "";
      hamburger.childNodes[3].style.backgroundColor = "";
      hamburger.childNodes[5].style.backgroundColor = "";
    }
  }

  function moveBars() {
    const firstBarTop = first.getBoundingClientRect().top +
      (first.getBoundingClientRect().bottom -
        first.getBoundingClientRect().top) /
        3;
    const firstBarLeft = last.getBoundingClientRect().left;
    const lastBarTop = last.getBoundingClientRect().top +
      (last.getBoundingClientRect().bottom - last.getBoundingClientRect().top) /
        2;

    const posFirstRight = posFirst.getBoundingClientRect().right;
    const posFirstLeft = posFirst.getBoundingClientRect().left;
    const posLastRight = posLast.getBoundingClientRect().right;

    barOne.style.top = `${firstBarTop}px`;
    barOne.style.left = `${firstBarLeft + 10}px`;
    barOne.style.width = `${posFirstLeft - firstBarLeft - 15}px`;

    barTwo.style.top = `${lastBarTop}px`;
    barTwo.style.width = `${posFirstRight - posLastRight - 20}px`;
    barTwo.style.left = `${posFirstRight - barTwo.offsetWidth - 10}px`;

    barThree.style.top = `${title.getBoundingClientRect().bottom + 5}px`;
    barThree.style.width = `${title.offsetWidth / 2}px`;
    barThree.style.left = `${(window.innerWidth - barThree.offsetWidth) / 2}px`;
  }

  function handleSocialClick(e) {
    if (e.target.id === "twitter") {
      window.open("https://twitter.com/cantthinkofpun", "_blank");
    } else if (e.target.id === "github") {
      window.open("https://github.com/daniel-j-pease", "_blank");
    } else {
      window.open("https://www.linkedin.com/in/daniel-pease", "_blank");
    }
  }

  function handleProjectHover(e) {
    e.target.childNodes[3].style.opacity = '1';
  }

  function handleProjectLeave(e) {
    e.target.childNodes[3].style.opacity = '0';
  }

  // add event listeners
  hamburger.addEventListener("click", handleHamburgerClick);
  nav.addEventListener("click", handleNavClick);
  body.addEventListener("click", hideNav);
  projectOne.addEventListener("mouseenter", handleProjectHover);
  projectOne.addEventListener("mouseleave", handleProjectLeave);
  projectTwo.addEventListener("mouseenter", handleProjectHover);
  projectTwo.addEventListener("mouseleave", handleProjectLeave);
  projectThree.addEventListener("mouseenter", handleProjectHover);
  projectThree.addEventListener("mouseleave", handleProjectLeave);
  twitter.addEventListener("click", handleSocialClick);
  github.addEventListener("click", handleSocialClick);
  linkedin.addEventListener("click", handleSocialClick);
  window.addEventListener("resize", moveBars);
  window.addEventListener("scroll", checkHamburger);

  moveBars();
};
