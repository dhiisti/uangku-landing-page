function fadeIn(){
  var target = document.querySelector('.anim');
  var targetPosition = target.getBoundingClientRect().top;
  var screenPosition = window.innerHeight /1.3;

    if(targetPosition < screenPosition){
        target.classList.add('fade-in');
    } 
} 

function slideIn(){
  var target = document.querySelector('.anim2');
  var targetPosition = target.getBoundingClientRect().top;
  var screenPosition = window.innerHeight /1.3;

    if(targetPosition < screenPosition && window.innerWidth > 800){
        target.classList.add('expand');
    }else{
      target.classList.add('fade-in');
    } 
}

function slideDown(){
  var target = document.querySelector('.anim3');
  var targetPosition = target.getBoundingClientRect().top;
  var screenPosition = window.innerHeight /2;

    if(targetPosition < screenPosition){
        target.classList.add('slide-down');
    } 
}

function mouseOver() {
  var nama = document.getElementById("nama")
  nama.classList.add('highlight');
}

function mouseOut() { 
  var nama = document.getElementById("nama")
  nama.classList.remove('highlight');
}

window.addEventListener("scroll", fadeIn);
window.addEventListener("scroll", slideIn);
window.addEventListener("scroll", slideDown);

nama.addEventListener("mouseover", mouseOver);
nama.addEventListener("mouseout", mouseOut);