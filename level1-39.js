// javascript coding test - [1차] 비밀지도 (lv1)
function solution(n, arr1, arr2) {
  let answer = [];

  let binary1 = [];
  let binary2 = [];
  for(let i = 0; i < n; i++) {
      binary1[i] = getBinary(arr1[i], n);
      binary2[i] = getBinary(arr2[i], n);
  }
  for(let i = 0; i < n; i++) {
      let s = '';
      for(let j = 0; j < n; j++) {
          if(binary1[i][j] === '#' || binary2[i][j] === '#') {
              s += '#';
          }else {
              s += ' ';
          }
      }
      answer[i] = s;
  }

  return answer;
}

function getBinary(number, n) {
  let s = '';
  
  let square = 1;
  
  for(let index = 1; index < n; index++) {
      square *= 2;
  }
  for(let i = 0; i < n; i++) {
      if(number / square >= 1) {
          s += '#';
          number -= square;
      }else {
          s += ' ';
      }
      square /= 2;
  }

  return s;
}