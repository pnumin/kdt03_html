document.addEventListener('DOMContentLoaded', ()=>{
  //1.노드가져오기
  const img = document.querySelector('img') ;
  const txt1 = document.querySelector('#txt1') ;
  const bt = document.querySelector('button') ;
  let flag = false ;
  let n ;

  //공통함수
  const init = (flagV,txt1dis, btv, imgv) => {
    flag = flagV ;
    
    txt1.style.display = txt1dis ;
    bt.textContent = btv ;
    img.setAttribute('src' , `../img/${imgv}.png`) ;
  }

  //2.버튼이 눌러졌을때
  bt.addEventListener('click' , (e) => {
    e.preventDefault();

    //2-1. 처음 눌러졌는지 확인해서 랜덤수 생성 
    if (!flag) {
      n = Math.floor(Math.random() * 100) + 1 ; //1~100
      init(true, 'block', '확인', 'what') ;
    }

    console.log(`n=${n}`)    
    //2-2. 랜덤수와 입력 값을 비교해서 업다운 이미지 보여주기
    if ( n > parseInt(txt1.value) ) {
      img.setAttribute('src' , '../img/up.png') ;
    }
    else if ( n < parseInt(txt1.value) ) {
      img.setAttribute('src' , '../img/down.png') ;
    }
    else if ( n == parseInt(txt1.value) ){
      //2-3. 숫자를 맞추면 처음 부터 다시 하도록
      txt1.value = '' ;
      init(false, 'none', '다시 시작하기', 'good') ;
    }

    txt1.focus();
  })



});