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

04;
("다트 게임");

function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let cnt = [];
  for (let i = 0; i < dartResult.length; i++) {
    //점수가 주어질때
    if (!isNaN(dartResult[i])) {
      //i-1이 1이고 i가 숫자면 10점.. //즉 10점인 경우와 그 외의 경우 처리
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]); //보너스 S일때
    } else if (dartResult[i] === "S") {
      cnt.push(score); //보너스 D일때
    } else if (dartResult[i] === "D") {
      cnt.push(Math.pow(score, 2)); //보너스 T일때
    } else if (dartResult[i] === "T") {
      cnt.push(Math.pow(score, 3)); //옵션 *일떄
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2; //옵션 #일때
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
    }
  } //3개의 점수 합산
  answer = cnt.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

05;
("신규 아이디 추천");

const filter = "1234567890abcdefghijklmnopqrstuvwxyz-_.";

function solution(new_id) {
  //1단계 : 대문자 -> 소문자
  new_id = new_id.toLowerCase();

  //2단계 : 소문자, 숫자, -, _, . 를 제외한 문자 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }

  //3단계 : .가 연속으로 들어오면 하나로 (.. -> .)
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }
  //4단계 : .가 처음이나 마지막에 위치하면 제거
  if (answer[0] === ".") {
    answer = answer.substr(1);
  }
  //마지막에 위치하면 제거 하는 함수 만들기(밑에서 또 씀)
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
    }
  }
  //함수 사용
  removeLastDot();

  //5단계 : 빈 문자열이면, "a"를 대입
  if (answer.length === 0) {
    answer = "a";
  }
  //6단계 : id 길이가 16자 이상이면 15개를 제외한 나머지 제거
  //       제거한 후에, 마침표가 끝에 붙으면 제거
  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }
  //7단계 : 문자열의 길이가 2자 이하라면, 마지막 글자 반복해서 3글자로 만들기
  if (answer.length < 3) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}

///매서드 방식
const filter = "1234567890abcdefghijklmnopqrstuvwxyz-_.";

function solution(new_id) {
  //1단계 : 대문자 -> 소문자
  new_id = new_id.toLowerCase();

  //2단계 : 소문자, 숫자, -, _, . 를 제외한 문자 제거
  let answer = new_id.split("").filter((str) => filter.includes(str));

  //3단계 : .가 연속으로 들어오면 하나로 (.. -> .)
  answer = answer.filter(
    (str, i) => (str === "." && answer[i + 1] !== ".") || str !== "."
  );
  //4단계 : .가 처음이나 마지막에 위치하면 제거
  if (answer[0] === ".") {
    // answer.splice(0,1);
    answer.shift();
  }
  const removeLastDot = () => {
    if (answer[answer.length - 1] === ".") {
      // answer.splice(answer.length -1, 1);
      answer.pop();
    }
  };
  removeLastDot();
  //5단계 : 빈 문자열이면, "a"를 대입
  if (answer.length === 0) {
    answer = ["a"];
  }
  //6단계 : id 길이가 16자 이상이면 15개를 제외한 나머지 제거
  //       제거한 후에, 마침표가 끝에 붙으면 제거
  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }
  //7단계 : 문자열의 길이가 2자 이하라면, 마지막 글자 반복해서 3글자로 만들기
  if (answer.length < 3) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    answer = answer.concat(add);
  }
  return answer.join("");
}

06;
("키패드 누르기");

const [leftNum, rightNum] = [
  [1, 4, 7],
  [3, 6, 9],
]; //비구조화 할당

function solution(numbers, hand) {
  let answer = "";

  //현재 손가락의 위치
  const current = {
    left: 10, //"*",
    right: 12, //"#"
  };
  for (let i = 0; i < numbers.length; i++) {
    if (leftNum.includes(numbers[i])) {
      answer += "L";
      current["left"] = numbers[i];
    } else if (rightNum.includes(numbers[i])) {
      answer += "R";
      current["right"] = numbers[i];
    } else {
      //가운데 번호를 누를 때, 위치값을 저장하는 객체
      const centerObj = { ...current };
      //객체 반복
      for (let key in centerObj) {
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        let location = Math.abs(numbers[i] - centerObj[key]);
        //위 아래로 이동한 것 처리해주기
        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }

        centerObj[key] = location;
      }
      // 거리가 동일하다면 주로 쓰는 손으로 키패드를 누른다.
      if (centerObj["left"] === centerObj["right"]) {
        answer += hand === "left" ? "L" : "R";
      } else {
        if (centerObj["left"] > centerObj["right"]) {
          answer += "R";
          current["right"] = numbers[i];
        } else answer += "L";
        current["left"] = numbers[i];
      }
    }
  }
  return answer;
}

///매서드 방식

const [leftNum, rightNum] = [
  [1, 4, 7],
  [3, 6, 9],
]; //비구조화 할당

function solution(numbers, hand) {
  //현재 손가락의 위치
  const current = {
    left: 10, //"*",
    right: 12, //"#"
  };

  const answer = numbers
    .map((num) => {
      if (leftNum.includes(num)) {
        current["left"] = num;
        return "L";
      } else if (rightNum.includes(num)) {
        current["right"] = num;
        return "R";
      } else {
        const centerObj = { ...current };
        Object.entries(centerObj).forEach((el) => {
          const hand = el[0];

          num = num === 0 ? 11 : num;
          let location = Math.abs(num - el[1]);

          if (location > 2) {
            location = Math.trunc(location / 3) + (location % 3);
          }

          centerObj[hand] = location;
        });

        if (centerObj["left"] === centerObj["right"]) {
          current[hand] = num;
          return hand === "right" ? "R" : "L";
        } else {
          if (centerObj["left"] > centerObj["right"]) {
            current["right"] = num;
            return "R";
          } else {
            current["left"] = num;
            return "L";
          }
        }
      }
    })
    .join("");
  return answer;
}
