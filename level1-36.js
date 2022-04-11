// javascript coding test - 나누어 떨어지는 숫자 배열 (lv1)
function solution(arr, divisor) {
    const answer = arr.filter((num) => num % divisor === 0);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
  }