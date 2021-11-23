01;
("하샤드 수");

function solution(x) {
  let n = String(x)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  return x % n === 0; //? true : false
}

// function solution(x) {
//     let sum = 0;
//     x = String(x)
//     for(let i=0; i<x.length; i++){
//         sum += Number(x[i]);
//     }
//     return x % sum ===0;
// }

// function solution(x) {
//     let sum = 0;

//     const temp = x.toString()
//                     .split("")
//                     .forEach(num=> {
//                         sum += Number(num);
//                     })
//         return x%sum ===0;
// }

02;
("내적");

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// function solution(a, b) {
//   let result = 0;
//   for (let i in a) {
//       result += a[i] * b[i]
//   }
//   return result
// }

function solution(a, b) {
  const answer = a.reduce((el, cu, i) => {
    return el + cu * b[i];
  }, 0);
  return answer;
}
03;
("제일 작은 수 제거");

function solution(arr) {
  const answer = [];
  const min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

function solution(arr) {
  const min = Math.min(...arr);

  const answer = arr.filter((num) => {
    return num !== min;
  });
  return answer.length === 0 ? [-1] : answer;
}
