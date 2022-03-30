// javascript coding test - 이상한 문자 만들기 (lv1)
function solution(s) {
  let strArr = s.split(" ");
  return strArr.map(el => {
      let str = "";
      for (let i = 0; i < el.length; i++) {
        if (i % 2 === 0) {
            str += el[i].toUpperCase(); 
        } else {
            str += el[i].toLowerCase(); 
        }
      }
      return str;
  }).join(" ");
}