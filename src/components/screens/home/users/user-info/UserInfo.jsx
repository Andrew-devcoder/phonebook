import React, { useState, useEffect } from "react";
// import axios from "axios";
import style from './UserInfo.module.scss'
import Button from '../../button/button'
// ?? тут так само чому ми пишемо з маленької букви ?

const UserInfo = () => {
	const [data, setData] = useState([]);

	const [showDetails, setShowDetails] = useState(false);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json(); // Розпаковування відповіді в форматі JSON
			})
			.then(data => {
				console.log(data.length)

				setData(data);
			})
			.catch(error => {
				console.error(error);
			});

	}, []); // Пустий масив дозволяє виконувати ефект тільки після монтування компонента

	return (

		<>

			{data.map((user) => (
				<div key={user.id} className={style.user}>
					<p>Name: {user.name}</p>
					<p>User-name: {user.username}</p>
					<p>Email: {user.email}</p>
					{showDetails && (
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

					<Button className={style.button} text="view more" onClick={() => setShowDetails(!showDetails)} />
				</div>


			))}
		</>
	);
};

export default UserInfo;
