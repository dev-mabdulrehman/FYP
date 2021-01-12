import React from "react";

function IconBox(props) {
	return (
		<>
			<i className={`fa fa-${props.icon} ${props.className} detail-icons`}></i>
			<div className="mt-5">
				<h2 className="p-0 m-0">{props.count}</h2>
				<small>{props.title}</small>
			</div>
		</>
	);
}

export default IconBox;
