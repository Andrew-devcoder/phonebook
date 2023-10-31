import React from "react";
import { Link } from 'react-router-dom'
import Button from "../../button/Button";
import style from './UserCard.module.scss';

const UserCard = ({ user, cardState, toggleCardDetails, }) => {
	if (!user) {
		return <div>No user data available</div>;
	}

	const currentURL = window.location.pathname;
	const buttonText = currentURL === `/user/${user.id}` ? "Back" : (cardState[user.id] ? "Hide" : "View More");

	const buttonAction = currentURL === `/user/${user.id}` ? () => window.history.back() : () => toggleCardDetails(user.id);

	return (
		<div key={user.id} className={style.user} >
			<p>Name: {user.name}</p>
			<p>User-name: {user.username}</p>
			<p>Email: {user.email}</p>
			{window.location.pathname === `/user/${user.id}` && (
				<>
					<p>Address: <br></br>
						street: {user.address.street}<br></br>
						suite: {user.address.suite}<br></br>
						city: {user.address.city}<br></br>
						zipcode: {user.address.zipcode}<br></br>
						geo-lat: {user.address.geo.lat}<br></br>
						geo-lng: {user.address.geo.lng}<br></br>
					</p>
					<p>phone: {user.phone}</p>
					<p>website: {user.website}</p>
					<p>company: <br></br>
						name: {user.company.name}<br></br>
						catchPhrase: {user.company.catchPhrase}<br></br>
						bs: {user.company.bs}<br></br>
					</p>
				</>
			)}

			{currentURL == `/user/${user.id}` && (
				<Link to={'/'}>
					<Button className={style.button} text="Back" />
				</Link>
			)}
			{currentURL == `/` && (
				<Link to={`/user/${user.id}`}>
					<Button className={style.button} text={buttonText} onClick={buttonAction} />
				</Link>
			)}

		</div >
	);
};

export default UserCard;
