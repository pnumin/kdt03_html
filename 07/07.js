document.addEventListener('DOMContentLoaded', ()=>{
  //이미지
  const com = document.querySelector('#com');
  const user = document.querySelector('#user');

  //버튼
  const bts = document.querySelectorAll('button');

  //메시지영역
  const msg = document.querySelector('#msg');

  //버튼의 이벤트 처리
  for(let bt of bts) {
    bt.addEventListener('click', ()=>{
      const userNum = parseInt(bt.innerHTML.charAt(0)) ;
      const comNum = Math.floor(Math.random() * 6) + 1;

      //이미지 변경
      com.setAttribute('src', `../img/${comNum}.png`) ;
      user.setAttribute('src', `../img/${userNum}.png`) ;

      //숫자를 맞췄는지 확인 
      (userNum === comNum) 
        ? msg.innerHTML = "<div class='spo'>맞음</div>" 
        : msg.innerHTML = "<div class='spx'>틀림</div>" 
    });
  }
});