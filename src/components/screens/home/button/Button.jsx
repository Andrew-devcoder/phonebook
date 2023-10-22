import { motion } from "framer-motion"

const Button = (props) => {
	return (
		<>
			{/* <motion.button whileHover={{ scale: 1.1 }} className="save-button" onClick={() => { null }}>{props.text}</motion.button > */}
			<motion.button whileHover={{ scale: 1.1 }} className='"save-button" {props.className}' onClick={props.onClick}>{props.text}</motion.button >
		</>
	)
}


export default Button