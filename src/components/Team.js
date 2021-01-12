import React from "react";

function Team(props) {
	return (
		<>
			<div className="team_member text-center">
				<div className="team_member_img">
					<img src={props.image} className="img-fluid" alt="team-image" />
				</div>
				<div className="team_member_bio mt-3">
					<h4>{props.name}</h4>
					<p>{props.designation}</p>
				</div>
			</div>
		</>
	);
}

export default Team;
