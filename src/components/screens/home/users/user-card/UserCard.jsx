import React from "react";
import Button from "../../button/Button";
import style from '../user-info/UserInfo.module.scss';

const UserCard = ({ user, cardState, toggleCardDetails }) => {
	if (!user) {
		return <div>No user data available</div>;
	}

	return (
		<div key={user.id} className={style.user}>
			<p>Name: {user.name}</p>
			<p>User-name: {user.username}</p>
			<p>Email: {user.email}</p>
			{/* {cardState[user.id] && ( */}
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
			{/* )} */}

			{/* <Button className={style.button} text={cardState[user.id] ? "hide" : "view more"} onClick={() => toggleCardDetails(user.id)} /> */}
		</div>
	);
};

export default UserCard;
