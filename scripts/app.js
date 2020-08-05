const navBtn = document.querySelector("#four");
const globalNav = document.querySelector("#global-nav");

navBtn.addEventListener('click', () => {
  console.log('You clicked it, bitch');

  showGlobalNav = !showGlobalNav;
  if (showGlobalNav) {
    globalNav.classList.add("global-transition");
    globalNav.style.display = "block";
  } else {
    globalNav.style.display = "none";
    globalNav.classList.remove("global-transition");
  }
});

let showGlobalNav = false;