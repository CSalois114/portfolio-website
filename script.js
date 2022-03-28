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
  const contentImage = document.getElementById("contentImage");
  const newContentImage = contentImage.cloneNode();
  addImageFunc(newContentImage);
  contentImage.parentNode.replaceChild(newContentImage, contentImage);
  newContentImage.style.animationPlayState = "running";
})

function addImageFunc(contentImage) {
  const contentTitle = document.getElementById("contentTitle")
  contentTitle.style.opacity = 0;
  contentImage.addEventListener("mouseover", function() {
    contentTitle.style.opacity = 1;
  })
  contentImage.addEventListener("mouseout", function() {
    contentTitle.style.opacity = .3;
  })
  contentImage.addEventListener("click", function() {
    alert("Link not yet set up. Sorry!")
  })
}

