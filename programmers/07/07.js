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

03;
("[1차]비밀지도");

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";

    const map1 = arr1[i].toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        //지도 둘 중 하나라도 벽(1)이라면
        //전체 지도에 벽(#)을 넣는다.
        answer[i] += "#";
      } else {
        //두 지도에서 모두 공백이면
        //전체 지도에 공백("")을 넣는다.
        answer[i] += " ";
      }
    }
  }
  return answer;
}

function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    map1 = map1.toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");
    // console.log(map1,arr2[i])
    return map1
      .split("")
      .map((el, l) => {
        //여기 왜 l이 map2가됐지?
        return el === "1" || map2[l] === "1" ? "#" : " ";
      })
      .join("");
  });
  return answer;
}
