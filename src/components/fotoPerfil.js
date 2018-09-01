import React, { PureComponent } from 'react';

export default class FotoPerfil extends PureComponent {
	render () {
		const { picture } = this.props;
		return <img src="http://placehold.it/32x32" />;
	}
}
