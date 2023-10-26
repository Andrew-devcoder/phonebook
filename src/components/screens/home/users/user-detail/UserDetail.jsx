import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import UserService from '../../../../../services/user.service.js'

const UserDetail = () => {

	const { id } = useParams()
	const [user, setUser] = useState({})

	useEffect(() => {
		if (!id) return

		const fetchData = async () => {
			const data = await UserService.getById(id)
			setUser(data);
			// setIsLoading(false);
		}
		fetchData()
	}, [id]);

	if (!user?.name) return <p>Loading...</p>

	return (
		<>
			<h1>User card</h1>
			<div user={JSON.stringify(user)}></div>

		</>
	)
}

export default UserDetail