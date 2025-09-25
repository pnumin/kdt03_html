//어제 날짜 가져오기
const getYesterday = () => {
  let yesterday = new Date() ;
  yesterday.setDate(yesterday.getDate() - 1) ;

  // let year = yesterday.getFullYear() ; //년도 4자리
  // let mon = String(yesterday.getMonth() + 1).padStart(2,'0') ; //월 1~12
  // let day = String(yesterday.getDate()).padStart(2,'0') ; //일 1~31

  // return (year + '-' + mon + '-' + day) ;

  //ISO 형식(예: 2025-09-22T09:00:00.000Z)
  return yesterday.toISOString().slice(0, 10) ;
}

const getrankInten = (rankInten) => {
  let sprankInten ;
  if (rankInten > 0) 
    sprankInten = `<span class="spr"><i class="fa-solid fa-arrow-up"></i>${rankInten}</span>` ;
  else if (rankInten < 0) 
    sprankInten = `<span class="spb"><i class="fa-solid fa-arrow-down"></i>${Math.abs(rankInten)}</span>` ;
  else 
    sprankInten = '<span class="sp">-</span>' ;
  
  return sprankInten ;
}

//박스 오피스 가져오기
const getData = (gdt, box) => {
  let apikey = '' ;
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${gdt}` ;

  //fetch
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let boxs = data.boxOfficeResult.dailyBoxOfficeList ;
      let tags = boxs.map(item => `<li class="boxli">
                                  <span class="boxrank">${item.rank}</span>
                                  ${getrankInten(item.rankInten)}
                                  <span>${item.movieNm.slice(0,20)}</span>
                                  </li>`);

      tags = tags.join('') ;
      box.innerHTML = tags ;
    })
    .catch(err => console.log(err)) ;

  console.log(url)
}

document.addEventListener('DOMContentLoaded', () => {
  //요소 가져오기
  const dt = document.querySelector("#dt") ;
  const box = document.querySelector("#box") ;

  //날짜가 변경될때 
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), box) ;
  }) ;

  //어제 날짜
  dt.value = getYesterday();
  dt.setAttribute('max', getYesterday());

  //초기 박스오피스가져오기
  getData(dt.value.replaceAll('-', ''), box) ;
}) ;