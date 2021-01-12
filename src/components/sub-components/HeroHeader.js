import React from "react";

function HeroHeader(props) {
	return (
		<div
			style={{ height: "200px", background: "#37474F", marginTop: "60px" }}
			className="d-flex align-items-center justify-content-center"
		>
			<h3
				className="text-white m-0 p-0 text-capitalize"
				style={{ fontFamily: "poppins" }}
			>
				{props.children}
			</h3>
		</div>
	);
}

export default HeroHeader;
