document.addEventListener('DOMContentLoaded', ()=>{
  // 노드 가져오기
  //select
  const sel1 = document.querySelector('#sel1');
  const sel2 = document.querySelector('#sel2');

  //input
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');

  //label
  const txt1Lb = document.querySelector('[for=txt1]');
  const txt2Lb = document.querySelector('[for=txt2]');

  // console.log(txt1Lb.textContent)
  // console.log(txt2Lb.textContent)

  // 공통함수
  const updataUI = () =>{
    txt1.value = '' ;
    txt1Lb.textContent = sel1.value ;

    txt2.value = '' ;
    txt2Lb.textContent = sel2.value ;
  }

  // select 변경시
  sel1.addEventListener('change', () => {
    sel2.value = sel1.value == '℃' ? '℉' : '℃' ;
    updataUI();
  });

  sel2.addEventListener('change', () => {
    sel1.value = sel2.value == '℃' ? '℉' : '℃' ;
    updataUI();
  });

  //input txt1의 값이 입력이 되면
  txt1.addEventListener('input', () => {
    let temp ;
    if (sel1.value == '℃') {
      //섭씨온도 -> 화씨온도
      temp = 	(parseFloat(txt1.value) * (9 / 5)) + 32 ; 
    }
    else {
      //화씨온도 -> 섭씨온도
      temp = (parseFloat(txt1.value) - 32) * (5/9) ;
    }

    txt2.value = parseFloat(temp.toFixed(4));
  });

});