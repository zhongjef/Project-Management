import React from 'react';

import './user.css';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<img src={ require(`${this.props.profilePic}`) } id="bigProfilePicCircle"/>
			</div>
		);
	}
}

export default Profile;