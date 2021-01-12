import React from "react";

function SectionHeader(props) {
	return (
		<>
			<div className="heading-wrapper text-center">
				<h3 className="text-capitalize mb-5 section-header">{props.title}</h3>
			</div>
		</>
	);
}

export default SectionHeader;
