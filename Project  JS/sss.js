
function playVid(vid) {
    if (vid.paused) {
        vid.play();
    } else {
        vid.pause();
    }
}

//////////////////////////////////////ifream


var ame = document.querySelector('.ame');
var images = ame.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.opacity = '0.3'; 
    // image.style.transition="opacity 3s";
  });

  image.addEventListener('mouseout', () => {
    image.style.opacity = '1';

    image.style.transition="opacity 5s"; 


  });
});
// div3.appendChild(divd);