import React, { useState } from 'react'
import Title from './title/Title'
import styles from './title/Title.module.scss'
import SearchBar from './search-bar/SearchBar'
import ContainerUsersList from './users/ContainerUsersList'
import UsersList from './users/users-list/UsersList'

const Home = () => {
	const [input, setInput] = useState("");

	return (
		<>
			<Title tag="h1" title="Phone Book" />
			<Title tag="h2" title="title h2 red color" className={styles.colorRed} />

			<SearchBar onChange={value => setInput(value)} />

			<ContainerUsersList>
				<UsersList input={input} />
			</ContainerUsersList>
		</>


	)
}

export default Home;

