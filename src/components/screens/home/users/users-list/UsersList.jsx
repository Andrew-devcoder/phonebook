import React, { useState, useEffect } from "react";
import UserCard from "../user-card/UserCard";
import UserService from '../../../../../services/user.service.js'

const UsersList = (props) => {
	const [data, setData] = useState([]);
	const [cardState, setCardState] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const toggleCardDetails = (cardId) => {
		setCardState(prevState => ({
			...prevState,
			[cardId]: !prevState[cardId],
		}));
	};


	// за допомогою fetch отримуємо з сервера масив з данними 
	// useEffect(() => {
	// 	const fetchData = async () => {

	// 		fetch("https://jsonplaceholder.typicode.com/users")
	// 			.then(response => {
	// 				if (!response.ok) {
	// 					throw new Error("Network response was not ok");
	// 				}
	// 				return response.json();
	// 			})
	// 			.then(data => {
	// 				setData(data);
	// 				setIsLoading(false);
	// 			})
	// 			.catch(error => {
	// 				console.error(error);
	// 			});
	// 	}

	// 	fetchData()

	// }, []);

	// інший спосіб отримання данних за допомогою axios
	useEffect(() => {
		const fetchData = async () => {
			const data = await UserService.getAll()
			setData(data);
			setIsLoading(false);
		}
		fetchData()
	}, []);

	return (
		<>
			{isLoading ? (
				<div className="loading-animation">Loading...</div>
			) : (
				data.filter((user) => {
					return props.input === '' ? true : user.name.toLowerCase().includes(props.input)
				}).map((user) => (
					<div key={user.id}>
						<UserCard user={user} cardState={cardState} toggleCardDetails={toggleCardDetails} />
					</div>
				))
			)}
		</>

	);
};

export default UsersList;
