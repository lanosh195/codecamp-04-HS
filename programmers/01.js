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
    {name: '다람쥐초등학교', teacher: '다람이'}
    
