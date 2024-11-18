$(function () {
    $(".slider-box").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });
})


window.addEventListener('DOMContentLoaded', () => {


    const btn = document.querySelector('.btnUp');
    const category = document.querySelector('.category');


    if(document && category){
      document.addEventListener('scroll', () => {
          if(scrollY > category.offsetHeight){
              btn.classList.add('btnUp-visible');
          }else{
              btn.classList.remove('btnUp-visible');
          }
          
      });
  }
  
  if(btn){
      btn.addEventListener('click', ()=>{
          window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        
          });
        });
  }


  const modalBtn = document.querySelectorAll('.btn-modal');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('.modal__close');
  const test = calcScroll();


    modalBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${test}px`;
        })
    });

    modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e)=>{
        if(e.target == modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    })

//УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
function calcScroll(){
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    
    document.body.append(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    
    div.remove();
    
    return scrollWidth;
    }

   
    //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
  


})