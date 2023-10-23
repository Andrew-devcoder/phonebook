// import { motion } from "framer-motion"

const Button = (props) => {
	return (
		<>
			<button className={props.className} onClick={props.onClick}>{props.text}</button >
		</>

	)
}


export default Button

{/* <motion.button whileHover={{ scale: 1.1 }} className='"save-button" {props.className}' onClick={props.onClick}>{props.text}</motion.button > */ }
