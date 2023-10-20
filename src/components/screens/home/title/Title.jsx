import { createElement } from "react"


const Title = ({ tag, className, style, title }) => {

	return createElement(tag, { className: className, style: style }, title)
}

export default Title


