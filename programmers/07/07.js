01;
("3진법 뒤집기");

function solution(n) {
  n = n.toString(3);

  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  return parseInt(reverse, 3);
}

//매서드 방식

function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}

02;
("N개의 최소공배수");

function solution(arr) {
  const biggest = Math.max(...arr);
  let sum = biggest;
  while (true) {
    let check = true;

    for (let i = 0; i < arr.length; i++) {
      if (sum % arr[i] !== 0) {
        check = false;
        break;
      }
    }
    if (check) {
      return sum;
      //함수안에서 break 하고 밖에서 return 한 거랑 똑같음.
    }
    console.log(check, sum);
    sum += biggest;
  }
}
