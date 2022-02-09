


const switchBtn = document.querySelector('.switch-btn');

const videoContainer = document.querySelector('.video-container');

switchBtn.addEventListener('click', function(){
  if(!switchBtn.classList.contains('slide')){
    switchBtn.classList.add('slide')
    videoContainer.pause()
  }else{
    switchBtn.classList.remove('slide')
    videoContainer.play()
  }
});

const preloader = document.querySelector('.preloader')

window.addEventListener('load', function(){
  preloader.classList.add('hide-preloader')
})





















