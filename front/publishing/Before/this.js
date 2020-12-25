//this의 맥락과 bind, apply, call
// var module = {
//   x: 81,
//   getX: function() {console.log(this.x); return this.x }
// };

// module.getX(); // 81

// var retrieveX = module.getX;
// retrieveX(); // 9 반환 - 함수가 전역 스코프에서 호출됐음

// console.log(retrieveX) //window or undefined
// module과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x와
// module의 속성 x를 혼동할 수 있음


//var boundGetX = module.getX.bind(module);
//boundGetX(); // 81
//위와 아래는 같음
// var a = module.getX
// a.apply(module)





//obj1.func.bind(obj), this의 맥락을 지정 함수로 바꿈, 전역스코프에서 함수가 타 객체에 할당되어 실행되면, this는 전역스코프를 가리킴.
//obj1.func는 전역스코프에서 타 객체에 할당되어 실행될 때, 해당 함수 내의 this를 argument로 받은 객체로 바인딩 함.
//call(obj,arg1,arg2,...), apply(obj,[arg1,arg2..]) : this의 맥락을 객체로 바꿈. 동시에 실행시킴 


//클로저
// var arr = []
// for(var i = 0; i < 5; i++){
//     arr[i] = function(id){
//       return function(){
//         return id;
//       }
//   }(i) //즉시 실행되면서 arr[i]에 할당됨
// }
// for(var index in arr) {
//     console.log(arr[index]);
// }