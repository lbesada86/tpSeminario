import React, { PureComponent } from 'react';

export default class Phone extends PureComponent {
	render () {
		const { phone } = this.props;
		return (
			<div className='phone'>
				<h3>Phone</h3>
				{phone}
			</div>
		);
	}
}