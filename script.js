const arrow = document.getElementById('arrow');

arrow.addEventListener('mouseover', function() {
  arrow.style.background = "radial-gradient(circle, rgb(209, 206, 255,.8) 0%, rgba(0,0,0,0) 50%)";
  arrow.style.animationPlayState = "paused";
});

arrow.addEventListener('mouseout', function() {
  arrow.style.background = "";
  arrow.style.animationPlayState = "";
});

arrow.addEventListener("click", function() {
  
})