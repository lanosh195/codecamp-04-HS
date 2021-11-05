01
    let name="한솔"
    // undefined
    name
    // '한솔'
02
    name="철수"
    // '철수'
    name
    // '철수'


03    
    let fruits=["사과","바나나","파인애플"]
    // undefined
    fruits
    // (3) ['사과', '바나나', '파인애플']
04
    let newFruits=[]
    // undefined
    newFruits.push(fruits[fruits.length-1])
    // 1
    newFruits
    // ['파인애플']
05
    let students = ["철수", "영희", "훈이", "짱구", "유리"]

    // undefined
    let newArr= students.slice(0,3)
    // undefined
    newArr
    // (3) ['철수', '영희', '훈이']

06 
    let fruits=["사과","바나나"]
    // undefined
    "맛있는"+" "+fruits[0]
    // '맛있는 사과'
    // "맛있는"+" "+fruits[]
    // VM765:1 Uncaught SyntaxError: Unexpected token ']'
    "맛있는"+" "+fruits[1]
    // '맛있는 바나나'
    fruits[0]="맛있는"+" "+fruits[0]
    // '맛있는 사과'
    fruits[1]="맛있는"+" "+fruits[1]
    // '맛있는 바나나'
    fruits
    // (2) ['맛있는 사과', '맛있는 바나나']

07
    const number = "01012345678"
    // undefined
    let arr = []


    // undefined
    arr.push(number.slice(0,3))

    // 1
    arr.push(number.slice(3,7))

    // 2
    arr.push(number.slice(7,11))

    // 3
    arr
    // (3) ['010', '1234', '5678']


08
    let students= {}
    // undefined
    let students={
        name: "철수"
    }
    // undefined
    students
    // {name: '철수'}   

    // sutdents= {};
    // students.name="철수"
09
    const student = {
        name: "철수",
        age: 8,
    };

    const school = {
        name: "다람쥐초등학교",
        teacher: "다람이",
    }
    // undefined
    student.school=school
    // {name: '다람쥐초등학교', teacher: '다람이'}
    
10
    let student = {
        name: "철수",
        drink: "사이다"
    };
    // undefined
    delete student.drink
    // true
    student
    // {name: '철수'}

11
    const classmates = [
        {
            name: "철수",
            age: 8,
            school: "다람쥐초등학교"
        },
        {
            name: "영희",
            age: 8,
            school: "토끼초등학교"
        },
        {
            name: "짱구",
            age: 8,
            school: "다람쥐초등학교"
        }
    ];
    // undefined
    classmates[1].school="다람쥐초등학교"
    // '다람쥐초등학교'
    classmates[1].school
    // '다람쥐초등학교'

12

13
    let str = "3"
    let number = 3
    // undefined
    typeof str
    // 'string'
    typeof number
    // 'number'
    str+number
    // '33'
14

15
16
17
18
    function boolean(input1, input2) {
        if(input1===true ||input2===true) { 
            console.log(true)
        }
            else if(input1===false &&input2===false)
        console.log(false)
    }
    // undefined
    boolean(true,false)
    // VM1562:3 true
    // undefined
    boolean(false,true)
    // VM1562:3 true
    // undefined
    boolean(false,false)
    // VM1562:6 false
    // undefined
19
    // unction evenOdd(num) {

    //     if (num%2===0) {
    //         console.log("Even");
    //     } else if (num%2===1) {
    //         console.log("Odd");
    //     } else if (num===0) {
    //         console.log("Zero");
    //     }
    // }
    // undefined
    // evenOdd(12)
    // VM1937:4 Even
    // undefined
    // evenOdd(15)
    // VM1937:6 Odd
    // undefined
    // evenOdd(0)
    // VM1937:4 Even
    function evenOdd(num) {

        if (num===0) {
            console.log("Zero");
        } else if (num%2===0) {
            console.log("Even");
        } else if (num%2===1) {
            console.log("Odd");
        }
    }
    // undefined
    evenOdd(15)
    // VM2158:8 Odd
    // undefined
    evenOdd(12)
    // VM2158:6 Even
    // undefined
    evenOdd(0)
    // VM2158:4 Zero
20     
    // function temperature(num){
    //     if(num<=18) {
    //         console.log("조금 춥네요")
    //     } else if (19<=num<=23){
    //         console.log("날씨가 좋네요")
    //     } else  {
    //         console.log("조금 덥습니다")
    //     }
    // }
    // // undefined
    // temperature(14)
    // // VM2991:3 조금 춥네요
    // // undefined
    // temperature(23)
    // // VM2991:5 날씨가 좋네요
    // // undefined
    // temperature(24)
    // // VM2991:5 날씨가 좋네요
    // // undefined
    // temperature(25)
    // // VM2991:5 날씨가 좋네요

    function temperature(num){
        if(num<=18) {
            console.log("조금 춥네요")
        } else if (19<=num &&num<=23){
            console.log("날씨가 좋네요")
        } else  {
            console.log("조금 덥습니다")
        }
    }
    // undefined
    temperature(23)
    // VM2946:5 날씨가 좋네요
    // undefined
    temperature(24)
    // VM2946:7 조금 덥습니다
21

    function days(month) {
        if(month===1
            ||month===3
            ||month===5
            ||month===7
            ||month===8
            ||month===10
            ||month===12      ) {
            console.log("31")
        }else if(month===4
                ||month===6
                ||month===9
                ||month===11  ) {
            console.log("30")
        }else if(month===2){
            console.log("28")
        }
    }
    // undefined
    days(1)
    // VM3778:9 31
    // undefined
    days(2)
    // VM3778:16 28
    // undefined
    days(4)
    // VM3778:14 30
    // undefined

23 숫자 더하기
function sum(num) {
    let count=0;
    for(i=0; i<=num; i++){
    count=count+i}
     console.log(count)
}

// undefined
sum(1)
// VM549:5 1
// undefined
sum(2)
// VM549:5 3
// undefined
sum(5)
// VM549:5 15    

24
function countLetter(str) {
    let count= 0;
       for(i=0; i<=str.length-1; i++){
           if(str[i]==="a" || str[i]==="A"){
           count++}
       } console.log(count)
   }
//    undefined
   countLetter("aaBA")
//    VM3065:6 3
//    undefined
   countLetter("aaaacdeA")
//    VM3065:6 5
//    undefined
// undefined
countLetter("aaAb")
// VM608:9 3
// undefined

25
num=3
3
let str= '';
for(let i=1; i<=num; i++){
str=str+i

    if(i!==num){
        str=str+'-'}
            console.log(str)
}
// VM63:7 1-
// VM63:7 1-2-
// VM63:7 1-2-3
26
function makeOdd(num) {
	let str = ""
	for (let i = 0; i <= num; i++) {
		if (i % 2 === 1) {
			str = str + i
		}
	}
	console.log(str)
}
    // undefined
    makeOdd(4)
    // VM647:8 13
    // undefined
    makeOdd(13)
    // VM647:8 135791113
    // undefined
27

function bigNum(str) {
	let max = 0;
	for (let i = 0; i <= str.length; i++) {
		if (Number(str[i]) >= max) {
			max = Number(str[i])
		}
	}
	console.log(max)
	
}

    // undefined
    bigNum(12345)
    // VM720:8 0
    // undefined
    bigNum("12345")
    // VM720:8 5
    // undefined
    bigNum("87135")
    // VM720:8 8
    // undefined

41 조건문 실전 적용 -점수에 따른 등급
function grade(score) {
    let aaa;
    if (score<=100 &&score>=90){
        aaa="A"
    }else if(score<=89 && score>=80){
        aaa="B"    
    }else if(score<=79 && score>=70){
        aaa="C"
    }else if(score<=69 && score>=60){
        aaa="D"    
    }else if (score<=59 && score>=0){
        aaa="F"    
    }else {
        aaa="잘못된 점수입니다"
    }
        console.log(aaa)
}
    // undefined
    grade(-10)
    // VM1211:16 잘못된 점수입니다
    // undefined
    grade(105)
    // VM1211:16 잘못된 점수입니다
    // undefined
    grade(97)
    // VM1211:16 A
    // undefined
    grade(86)
    // VM1211:16 B
    // undefined
    grade(75)
    // VM1211:16 C
    // undefined
    grade(66)
    // VM1211:16 D
    // undefined
    grade(52)
    // VM1211:16 F
    // undefined

42

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]
// undefined


    // let count; let totalPrice; let grade;
    // for(i=0; i<myShopping.length; i++){     
    //     if(myShopping[i].category==="의류"){
    //         count++, totalPrice=myShopping[i].price +totalPrice
    //     }
    // }
    //         if(count>=0 && count<=2){
    //             grade="Bronze"
    //         }else if(count>=3 && count<=4){
    //             grade="Silver"
    //         }else if(count>=5){
    //             grade="Gold"
    //         }        
   
    //     console.log("의료를 구매한 횟수는 총"+count+"회 금액은"+totalPrice+"원이며"+"등급은"+grade+"입니다")



        let count=0; let totalPrice=0; let grade="";
    for(i=0; i<myShopping.length; i++){     
        if(myShopping[i].category==="의류"){
            count++, totalPrice=myShopping[i].price +totalPrice
        }
    }
            if(count>=0 && count<=2){
                grade="Bronze"
            }else if(count>=3 && count<=4){
                grade="Silver"
            }else if(count>=5){
                grade="Gold"
            }        
   
        console.log("의료를 구매한 횟수는 총"+count+"회 금액은"+totalPrice+"원이며"+"등급은"+grade+"입니다")
VM166:15 의료를 구매한 횟수는 총5회 금액은57000원이며등급은Gold입니다

