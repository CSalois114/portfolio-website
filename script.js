const arrow = document.getElementById('arrow');
const tunnel = document.getElementById('tunnelAnimation');
var i = 0;
const images = [
  {
    file: 'chris.jpeg',
    title: "About Me",
    link: "ABOUT ME" 
  },
  {
    file: 'github.png', 
    title: "Github",
    link: "github.com"
  },
  {
    file: 'linkedIn.png',
    title: "LinkedIn",
    link: "linkedin.com"
  }
];

arrow.addEventListener('mouseover', function() {
  arrow.style.background = 
    "radial-gradient(circle at 50% 35%, rgb(209, 206, 255,.7) 5%, rgba(0,0,0,0) 28%)";
  arrow.style.animationPlayState = "paused";
});

arrow.addEventListener('mouseout', function() {
  arrow.style.background = null;
  arrow.style.animationPlayState = "running";
});

arrow.addEventListener("click", function() {
  const contentImage = document.getElementById("contentImage");
  resetContentNode();
  changeContent();
  addContentListeners();
});

function resetContentNode() {
  const newContentImage = contentImage.cloneNode();
  contentImage.parentNode.replaceChild(newContentImage, contentImage);

  contentImage.style.animationPlayState = "running";
}

function changeContent() {
  contentImage.src = "./images/" + images[i].file;
  
  const contentTitle = document.getElementById("contentTitle");
  contentTitle.innerText = images[i].title;
  contentTitle.style.opacity = 0;

  contentImage.addEventListener("animationend", function() {
    contentTitle.style.opacity = .3;
  })

  contentImage.addEventListener("click", function() {
    alert(`Link is not set up yet. Sorry!`)
  })

  i = i < images.length - 1 ? i + 1 : 0;
}

function addContentListeners() { 
  contentImage.addEventListener("mouseover", function() {
    contentTitle.style.opacity = 1;
  })
  contentImage.addEventListener("mouseout", function() {
    contentTitle.style.opacity = .3;
  })
}

