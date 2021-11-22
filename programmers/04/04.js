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
