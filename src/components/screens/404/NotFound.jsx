import { Link } from 'react-router-dom'
import style from './NotFound.module.scss'

const NotFound = () => {
	return (
		<>
			<h1>Nice Try</h1>
			<h3>Now try again. Maybe what you`re looking for is here:</h3>
			<Link to='/' className={style.link}>Home</Link>
			<div style={{ backgroundImage: `url("/404.png")` }} className={style.bgImg}></div>
		</>
	)
}

export default NotFound