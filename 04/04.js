//회문
const check1 = () => {
  //1. 사용자가 입력한 내용을 가져오기
  const inputV = document.getElementById('txt1').value ;

  //2. 사용자가 입력한 문자열을 뒤집기
  console.log(typeof(inputV));
  console.log(inputV.length) ;
  console.log(inputV[0]) ;
  console.log(inputV.charAt(0))

  //입력한 문자열에서 공백 제거
  let inputVt = inputV.replaceAll(' ','') ;
  let resultV = '' ;
  // for(let i=inputVt.length - 1 ; i>=0 ; i--) {
  //   console.log(inputVt[i]);
  //   resultV = resultV + inputVt[i] ;
  // }
  resultV = inputVt.split('').reverse().join('');
  console.log(resultV)


  //3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교
  //3-1. 결과를 input 요소에 출력
  if (inputVt == resultV) 
    document.getElementById('txt2').value = `"${inputV}"는 회문입니다.` ;
  else 
    document.getElementById('txt2').value = `"${inputV}"는 회문이 아닙니다.` ;

  //3-2. 결과를 div 요소에 출력
  document.getElementById('msg').innerHTML = `<span>"${inputV}"</span>는 
    ${inputVt == resultV ? "회문입니다": "회문이 아닙니다."}`;

}

//숫자합계
const check2 = () => {
  //1.사용자가 입력한 문자열 가져오기
  const inputV = document.getElementById('txt1').value ;

  //2.문자열에서 숫자인식 해서 더하기
  let sum = 0 ;
  // for(let i = 0 ; i < inputV.length ; i++) {
  //   if (!isNaN(inputV[i])) {
  //     sum = sum + parseInt(inputV[i]) ;
  //   }
  // }
  for (let c of inputV) {
    if (!isNaN(c)) {
      sum = sum + parseInt(c) ;
    }  
  }

  //3.합계 출력
  document.getElementById('txt2').value = sum ;
  document.getElementById('msg').innerHTML = `합계 =&nbsp;<span>${sum}</span>` ;
}

//취소처리
const check3 = () => {
  document.getElementById('txt1').value = '';
  document.getElementById('txt2').value = '';
  document.getElementById('msg').innerHTML = '';

  document.getElementById('txt1').focus() ;
}