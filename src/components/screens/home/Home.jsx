import React from 'react'
import Title from './title/Title'
import styles from './title/Title.module.scss'
import Users from './users/Users'
import UserInfo from './users/user-info/UserInfo'

const Home = () => {

	return (
		<>
			<Title tag="h1" title="Phone Book" />
			<Title tag="h2" title="asd" className={styles.colorRed} />
			<Users>
				<UserInfo />
				{/* <ButtonMore /> */}
			</Users>
		</>
	)
}

export default Home;

