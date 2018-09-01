import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class User extends PureComponent {
    render() {
        const {name, email} = this.props;
        return (
            <article>
                {name} / {email}
            </article>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};