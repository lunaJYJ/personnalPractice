var obj = {
  prop: "Hello",
  sayHello: function () {
    console.log(this.prop);
  },
};

obj.sayHello(); // Logs "Hello"

var ref = obj.sayHello;
ref(); //undefined.
//이유 : var ref = obj.sayHello; 구문을 실행하면서 obj 와의 관계를 상실
//따라서 undefined. ref()는 객체의 메소드로서 호출한 것이 아니고, 그저 함수로써 호출 한 것.
//이것때문에 생기는 문제 중 하나가 react에서 있는데,

class Home extends React.Component {
  update() {
    this.setState({
      newStuff: true,
    });
  }

  render() {
    return <div onClick={this.update} />; //이 부분에서 update 내부의 this는 Home과의 관계가 상실됨.
  }
}
//구문의 {this.update} render() 메소드에서 this.update 를 부를 때
//메소드를 호출하지 아니하고 일반함수를 호출한 것이 되버리기 때문.
// this.update가 호출되는순간 일반 함수 (function() {this.setState(~~)})(); 와 같음.
// 자바스크립트에 this는 일반함수로 호출 될 때 현재 실행호스트의 전역객체를 참조.
// 따라서 전역객체와 연결시켜버림.
//따라서 this를 바인딩 해줘야 함.

//1번 방법 : onClick = {this.update.bind(this)}
//2번 방법: constructor() 내부에서 바인딩
// 2번 ex :
/*
constructor() {
    super(this)
    this.update = this.update.bind(this)
}
(...)
update () {
    ...
}
*/

//3번 방법: @autobind 데코레이터 사용.
//3번 ex :
/*
    import autobind from 'autobind-decorator'
    (...)
    class Home exteds React.Component {
        @autobind
        update() {
            (...)
        }
    }

*/
//4번 방법 : arrow function
