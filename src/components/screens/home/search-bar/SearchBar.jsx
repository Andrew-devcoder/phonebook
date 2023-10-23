import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

import style from './SearchBar.module.scss'

const SearchBar = () => {
	const [input, setInput] = useState('')

	return (
		< div className={style.wrapper} >
			<BiSearch />
			<input
				placeholder='Type to search...'
				value={input}
				onChange={(e) => { setInput(e.target.value) }} />
		</ div>
	)
}


export default SearchBar

