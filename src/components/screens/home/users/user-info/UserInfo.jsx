import React, { useState, useEffect } from "react";
import UserCard from "../user-card/UserCard";

const UserInfo = (props) => {
	const [data, setData] = useState([]);
	const [cardState, setCardState] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const toggleCardDetails = (cardId) => {
		setCardState(prevState => ({
			...prevState,
			[cardId]: !prevState[cardId],
		}));
	};

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then(data => {
				setData(data);
				setIsLoading(false);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<>
			{isLoading ? (
				<div className="loading-animation">Loading...</div>
			) : (
				data.filter((user) => {
					return props.input === '' ? true : user.name.toLowerCase().includes(props.input)
				}).map((user) => (
					<UserCard key={user.id} user={user} cardState={cardState} toggleCardDetails={toggleCardDetails} />
				))
			)}
		</>

	);
};

export default UserInfo;
