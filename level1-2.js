// javascript coding test - 로또의 최고 순위와 최저순위 (lv1)

function solution(lottos, win_nums) {
  var answer = [];
  
  const correct = lottos.filter(num => win_nums.includes(num)).length;
  const zeroCnt = lottos.filter(num => num === 0).length;
  
  let minRank = 7-correct >= 6 ? 6: 7-correct;
  let maxRank = zeroCnt === 6 ? 1: minRank - zeroCnt;
  
  answer.push(maxRank,minRank);
  
  return answer;
}