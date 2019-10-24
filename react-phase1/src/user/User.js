import React from 'react';

import Profile from './Profile';
import './user.css';

class User extends React.Component {
	state = {
		profilePic: "./squirrel.jpg"
	}
	
	render () {
		return (
			<div>
				<img src={require("./squirrel.jpg")} id="bigProfilePicCircle"/>
			</div>
		);
	}
}

export default User;