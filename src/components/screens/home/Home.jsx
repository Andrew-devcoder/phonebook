import React from 'react'
import Title from './title/Title'
import styles from './title/Title.module.scss'
import Users from './users/Users'
import UserInfo from './users/user-info/UserInfo'




const Home = () => {

	return (
		<>
			<Title tag="h1" title="Phone Book" />
			<Title tag="h2" title="title h2 red color" className={styles.colorRed} />
			{/* <Users> */}
			<UserInfo />
			{/* </Users> */}
		</>
	)
}

export default Home;

