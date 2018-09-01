import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Usuario extends PureComponent {
	render () {
		const { name, age, gender, key, isActive } = this.props;

		return (
			<div>
				<h2 key={key}>{name}</h2>
				<p>Age: {age}</p>
				<p>Gender: {gender}</p>
				<p>The usuer is {isActive ? 'Active' : 'Inactive'}</p>
			</div>
		);
	}
}
const genderTypes = [ 'male', 'female', 'other' ];

Usuario.propTypes = {
	name: PropTypes.string.isRequired,
	gender: PropTypes.oneOf(genderTypes).isRequired,
	age: PropTypes.number.isRequired,
	isActive: PropTypes.bool.isRequired
};
