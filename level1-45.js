// javascript coding test - 실패율 (lv1)
const solution = (N, stages) => {
    let answer = [];
  
   
    let total = stages.length;
  
    for (let i = 1; i <= N; i++) {
      let stageNum = stages.filter(ele => ele === i).length;
  
      let failNum = 0;
  
      if (stageNum === 0) {
        failNum = 0;
      } else {
        failNum = (stageNum) / total;
      }
  
      total -= stageNum;
      answer.push({ idx: i, ratio: failNum });
    }
  
    answer.sort((a, b) => {
      if (a.ratio === b.ratio) {
        return a.idx - b.idx;
      } else {
        return b.ratio - a.ratio;
      }
    })
    return answer.map(ele => ele.idx);
  }