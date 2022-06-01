const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }






const animacao = document.querySelectorAll(".animacao");
const animacaoClass = 'aparece';

function animescroll(){

    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5);
    console.log(windowTop);

    animacao.forEach(function(element){

        if ((windowTop) > element.offsetTop) {
            element.classList.add(animacaoClass)
        }else{
            element.classList.remove(animacaoClass);
        }
        console.log(element.offsetTop);
    })
}
animescroll();

if(animacao.length){
    window.addEventListener('scroll', debounce(function(){
        animescroll();
    }, 10))
}

// -------------------------------------------
const btn = document.querySelector(".btn");
const desaparecer = 'desaparecer'

let larguraAtual = window.innerWidth;

if(larguraAtual <= 700){
    console.log('menor que 700px');
    btn.classList.add(desaparecer);
}else{
    btn.classList.remove(desaparecer)
}
