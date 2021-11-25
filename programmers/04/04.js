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

function solution(a, b) {
  let answer = 0;
  for (let i in a) {
    answer += a[i] * b[i];
  }
  return answer;
}

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

04;
("행렬의 덧셈");
function solution(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

function solution(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];

      if (answer[i] === undefined) {
        answer[i] === [];
      }
    }
    answer[i][j] = sum;
  }
  return answer;
}

function solution(arr1, arr2) {
  return arr1.map((a, i) => arr2[i].map((b, j) => arr1[i][j] + arr2[i][j]));
}

05;
("2016년");

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SNU", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  // days는 총 일수를 저장하는 변수
  let days = 0;

  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  days += b - 1;
  return week[days % 7];
}

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();

  return week[days];
}
