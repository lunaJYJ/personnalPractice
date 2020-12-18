import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		message: '',
		username: '',
	};

	// constructor(props) {
	// 	super(props);
	// 	this.handleChange = this.handleChange.bind(this);
	// 	this.handleClick = this.handleClick.bind(this);
	//  //constructor 의 this는 EventPractice 를 가리킴. 따라서 this.handleChange의 내부에 있을 this.를 바인딩해줌
	// }

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleClick = () => {
		//constructor 에서 this바인딩 하지 않으면 state를 찾을 수 없다는 오류
		//화살표 함수로 했을 경우 컴포넌트인  EvnetPractice를 가리킴
		//함수 handleClick() {} 로 했을경우엔 undefined. 본인이 속한 객체를 가리키기 때문인 듯..
		console.log(this);
		alert(this.state.username + ': ' + this.state.message);
		this.setState({
			message: '',
			username: '',
		});
	};

	render() {
		//이 곳에서의 This는 Component 일 것
		return (
			<div>
				<h1>EvnetPractice</h1>
				<input
					type="text"
					name="message"
					placeholder="Enter Anything"
					value={this.state.message}
					onChange={this.handleChange} //Component의 method 가 아닌 그저 function으로 인식되면서, 내부this가 전역객체로 인식
				/>
				<input
					type="text"
					name="username"
					placeholder="Enter the name"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>초기화</button>
			</div>
		);
	}
}

export default EventPractice;

// import React, { useState } from 'react';

// const EventPractice = () => {
// 	const [form, setForm] = useState({
// 		username: '',
// 		message: '',
// 	});
// 	const { username, message } = form;

// 	const onChange = (e) => {
// 		let nextForm = {
// 			...form,
// 			[e.target.name]: e.target.value,
// 		};
// 		setForm(nextForm);
// 	};

// 	const onClick = () => {
// 		alert(username + ' : ' + message);
// 		setForm({
// 			username: '',
// 			message: '',
// 		});
// 	};
// 	const onKeyPress = (e) => {
// 		if (e.key === 'Enter') {
// 			onClick();
// 		}
// 	};
// 	return (
// 		<div>
// 			<h1>Event Practice</h1>
// 			<input
// 				type="text"
// 				name="message"
// 				placeholder="Enter user name"
// 				value={username}
// 				onChange={onChange}
// 			/>
// 			<input
// 				type="text"
// 				name="message"
// 				placeholder="Enter Anything"
// 				value={message}
// 				onChange={onChange}
// 				onKeyPress={onKeyPress}
// 			/>
// 			<button onClick={onClick}>Confirm</button>
// 		</div>
// 	);
// };

// export default EventPractice;
