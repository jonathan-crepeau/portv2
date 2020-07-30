const globalNavBtn = document.getElementById("four");

globalNavBtn.addEventListener("click", function() {
  console.log('clicked!');
  document.getElementById("global-nav").classList.toggle("show");
});