//오브젝트 (객체)
let obj = {'오렌지' : '🍊'} ;

//오브젝트에 자료 추가
obj['사과'] = '🍎' ;
obj['바나나'] = '🍌' ;

console.log(obj)

obj['사과'] = '🍏' ;
console.log(obj)

//삭제
delete obj['사과'] ;
console.log(obj)

//키만 추출
console.log(Object.keys(obj))
for(let k of Object.keys(obj)) {
  console.log(k, obj[k]) ;
}

//값만 추출
console.log(Object.values(obj))
for(let v of Object.values(obj)) {
  console.log(v) ;
}

//키와 값추출
console.log(Object.entries(obj))
for(let [k,v] of Object.entries(obj)) {
  console.log(k, v) ;
}

//오브젝트 병합
let obj2 = {'수박':'🍉'} ;

let obj3 = {...obj2, ...obj} ;
console.log(obj3)
