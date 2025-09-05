//회문
const check1 = (e) => {
  //0. 버튼의 submit기능을 없앰
  // e.preventDefault();

  //1. 사용자가 입력한 내용을 가져오기
  const inputV = document.getElementById('txt1').value ;

  //2. 사용자가 입력한 문자열을 뒤집기
  console.log(typeof(inputV));
  console.log(inputV.length) ;
  console.log(inputV[0]) ;

  //입력한 문자열에서 공백 제거
  let inputVt = inputV.replaceAll(' ','') ;
  let resultV = '' ;
  for(let i=inputVt.length - 1 ; i>=0 ; i--) {
    console.log(inputVt[i]);
    resultV = resultV + inputVt[i] ;
  }


  //3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교
  if (inputVt == resultV) 
    document.getElementById('txt2').value = `"${inputV}"는 회문입니다.` ;
  else 
    document.getElementById('txt2').value = `"${inputV}"는 회문이 아닙니다.` ;
}