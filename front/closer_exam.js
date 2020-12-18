function bd() {
  this.name = "white";
  return {
    name: "black",
    bark: function () {
      console.log(this.name); //종속된 객체, return 객체.
    },
  };
}
function wd() {
  this.name = "white";
  return {
    name: "black",
    bark: () => {
      console.log(this.name); //인스턴스 가리킴
    },
  };
}

//new 를 사용하지 않으면 위의 this.name은 전역객체에 name이 추가됨.
//new를 쓰면 빈 객체(인스턴스)를 만들고 그곳에 this를 바인딩, 해당 객체를 할당함.
var black = new bd();
console.log(black.name); //black. cuz, bd()가 객체를 리턴했기 때문에.

var white = new wd();
console.log(white.name); //black 위와 같은 이유.

black.bark();
//객체를 리턴하고, 그 객체에서 name변수를 'black'으로 초기화, 따라서 funciton()의 this는 그 객체를 가리킴.

white.bark();
//자 그렇다면, 위에 정의한 this.name = 'white'는 어디에 있는가?
// -> 클로저 때문에 접근 가능한 것. this.name이 사라진 것 같지만, 클로저가 있어서 접근이 가능.
//클로저는 일종의 자바스크립트만의 특성이자 변수 유효범위.
