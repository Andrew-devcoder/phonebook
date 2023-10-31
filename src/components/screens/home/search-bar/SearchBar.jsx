import React from "react";
import { BiSearch } from "react-icons/bi";

import style from './SearchBar.module.scss'

const SearchBar = (props) => {

	return (
		< div className={style.wrapper} >
			<BiSearch />
			<input
				placeholder='Type to search...'
				type="text"
				onChange={(e) => props.onChange(e.target.value.toLowerCase())}
			/>
		</ div>
	)
}


export default SearchBar

