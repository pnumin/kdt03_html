document.addEventListener('DOMContentLoaded', ()=>{
  const mainimg = document.querySelector('#mainimg > img');
  const thumimg = document.querySelectorAll('#thumimg > img') ;

  for(let thum of thumimg) {
    thum.addEventListener('mouseover' , () => {
      mainimg.setAttribute('src', thum.getAttribute('src')) ;
      mainimg.setAttribute('alt', thum.getAttribute('alt')) ;
    }) ;
  }

});