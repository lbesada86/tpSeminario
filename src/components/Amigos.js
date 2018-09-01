import React, { PureComponent } from 'react';

export default class Amigos extends PureComponent {
	render () {
		const { friends } = this.props;
		return (
			<div className='friends'>
				<h3>Friends</h3>
				{friends.map((friend, key) => <p key={key}>{friend.name}</p>)}
			</div>
		);
	}
}