const slides = document.querySelectorAll('.slide');
const nxtBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');



slides.forEach(function(item,index){
  item.style.left = `${index * 100}%`
})

let counter = 0;

nxtBtn.addEventListener('click', function(){
  counter ++;
  carousel()
});
prevBtn.addEventListener('click', function(){
  counter --;
  carousel()
})

function carousel(){

if(counter< slides.length-1){
  nxtBtn.style.display = 'block'
}else{
  nxtBtn.style.display = 'none'
};

if(counter>0){
prevBtn.style.display = ' block'

}else{
  prevBtn.style.display= 'none'
}


  slides.forEach(function(value){
    value.style.transform = `translateX(-${counter * 100}%)`
  })
}

prevBtn.style.display = 'none'
