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

console.log(int_num);