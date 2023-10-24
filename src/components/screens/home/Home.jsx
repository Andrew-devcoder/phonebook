import React, { useState } from 'react'
import Title from './title/Title'
import styles from './title/Title.module.scss'
import SearchBar from './search-bar/SearchBar'
import Users from './users/Users'
import UserInfo from './users/user-info/UserInfo'

const Home = () => {
	const [input, setInput] = useState("");

	return (
		<>
			<Title tag="h1" title="Phone Book" />
			<Title tag="h2" title="title h2 red color" className={styles.colorRed} />

			<SearchBar onChange={value => setInput(value)} />

			<Users >
				<UserInfo input={input} />
			</Users>
		</>


	)
}

export default Home;

