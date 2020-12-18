import React from 'react';
import PropTypes from 'prop-types';

// const MyCompo = (props) => {
// 	const { name } = props; //props 객체에서 값을 추출함. 비구조화 할당.
// 	return (
// 		<div>
// 			{name}'s new nice component! <br />
// 			{props.children} is mycomp's string
// 		</div>
// 	);
// };
const MyCompo = ({ name, children, favorNumber }) => {
	//Children is represent to exsist content between tag.
	//함수의 파라미터 부분에서도 사용가능. 파라미터가 객체라면 그 값을 바로 비구조화 할당.
	console.log(favorNumber);
	return (
		<div>
			{name}'s new nice component! <br />
			{children} is mycomp's string <br />
			{favorNumber} is your favor number.
		</div>
	);
};

MyCompo.defaultProps = {
	name: 'React',
};

MyCompo.propTypes = {
	name: PropTypes.string.isRequired,
	favorNumber: PropTypes.number,
};

export default MyCompo;
