document.addEventListener('DOMContentLoaded',()=>{
  //노드 가져오기
  //주사위 이미지 가져오기
  const diceImg = document.querySelector('#diceDiv > img') ;
  //버튼 가져오기
  const bt = document.querySelector("#btDiv > button") ;

  //버튼 클릭
  bt.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1 ; //1~6까지
    diceImg.setAttribute('src' , `../img/${n}.png`) ;
    diceImg.setAttribute('alt' , `${n}`) ;
  }) ;
}) ;