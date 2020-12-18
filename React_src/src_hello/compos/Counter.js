import React, { Component } from 'react';

class Counter extends Component {
	state = {
		number: 0,
		fixedNumber: 0,
	}; // 이렇게 쓰지 않으면 constructor 이용해야함..
	//Ex )
	/* 
	constructor (props) {
		super(props);
		this.state = {
		(...)
		}
	}
	*/

	render() {
		const { number, fixedNumber } = this.state; //이곳의 this = Component 'Counter'
		return (
			<div>
				<h1>{number}</h1>
				<h2>Non-Change Value : {fixedNumber}</h2>
				<button
					onClick={() => {
						this.setState((prevState) => {
							return {
								number: prevState.number + 1,
							};
						});
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
