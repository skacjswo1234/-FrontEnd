// 자바스크립트 = 인터프리터 방식이다.
// 타입추론 
// (int) = 4byte 확보해놓은상황.
// let = 무슨타입이 들어오든 모든걸 받아들일수있다.
// 장점 : 쉽게 실행할수있다.
// 단점 : 타입추론 - 복잡한걸 잡을수없게된다
// 자바로 들어오면 String

let int_num = 1;
let double_num = 1.0;
let bool_data = true;
let string_data = '안녕';
let char_data = "가";
let back_data = `백틱 ${int_num}`;
let list_data = [1,2,3,4]; // 여기서 list (Collection) 이라고 생각하자.
let map_data = {
    id: 1,
    username: "ssar"
};

//console.log(int_num);

// for( let i=0; i<list_data.length; i++) {
//     console.log(list_data[i]);
// }

// let 이용 newPrint 1급객체 생성하였다.
let newPrint =  (value)=> { // 이상태로 지워버리면 익명함수라고한다. 이름이 중요하지않기때문이다.(현재 화살표함수)
    console.log(value+100);
}

// 1. 반복문
list_data.forEach(newPrint);

// 마지막 중괄호를 뺴고 => return값을 화살표함수를 이용하면 리턴값이 호출된다. 신기..
let newHello = (value, index)=>value+100;  // 화살표함수   

let newHello2 = (value, index)=> { // 두줄이있으면 위처럼지우고 쓸수없다.
    value = value*2;
    return value+100;
}

// 2. 리턴이 있는 반복문
// yeild - 값이들어오면 멈추지않고 스트림형식으로 +1씩 증가한다고 생각하자. int = 4byte공간을 받을경우 let new_date 객체에넣어도 값이들어와도 멈추지않고 반복문을 실행한다.
// map 데이터의 개념에대해서 잘알자 . 컴포넌트들을 모아서 한번에 출력하는것이다. 리턴값이 있기때문에 바로 출력한다.
// 호이스팅 -> 예금메서드로 예를들어서 만원을 송금하더라도 리턴으로 다시 받더라도 쓰레드메서드가 종료되어도 스택값이 날라가도 그대로 값을 가져야한다.
let new_date = list_data.map((value, index) => value+100);

console.log(new_data);

