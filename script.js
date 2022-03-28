const arrow = document.getElementById('arrow');
const contentImage = document.getElementById("contentImage");
const contentTitle = document.getElementById("contentTitle")

arrow.addEventListener('mouseover', function() {
  arrow.style.background = "radial-gradient(circle, rgb(209, 206, 255,.8) 0%, rgba(0,0,0,0) 50%)";
  arrow.style.animationPlayState = "paused";
});

arrow.addEventListener('mouseout', function() {
  arrow.style.background = "";
  arrow.style.animationPlayState = "";
});

arrow.addEventListener("click", function() {
  contentImage.style.animationPlayState = "running";
})

contentImage.addEventListener("mouseover", function() {
  contentTitle.style.opacity = 1;
})

contentImage.addEventListener("mouseout", function() {
  contentTitle.style.opacity = .3;
})

contentImage.addEventListener("click", function() {
  alert("Link not yet set up. Sorry!")
})