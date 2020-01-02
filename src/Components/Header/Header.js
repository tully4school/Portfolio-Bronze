import React from "react";
import "./Header.css";
function Header(props) {
	return (
		<div className='header display-4 px-3 py-2'>
			<span className={props.span}>{props.header}</span>
		</div>
	);
}

export default Header;
