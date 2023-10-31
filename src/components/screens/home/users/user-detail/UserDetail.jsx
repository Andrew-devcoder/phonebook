import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import UserService from '../../../../../services/user.service.js'
import UserCard from '../user-card/UserCard.jsx'

import Title from '../../title/Title.jsx'

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
			<Title tag="h1" title={`Full info ${user.name}`} />
			<UserCard user={user} />
		</>
	)
}

export default UserDetail