import React, { Component } from "react";

export class ReviewStars extends Component {
	render() {
		let stars = new Array(5).fill(0);
		stars = stars.fill(1, 0, this.props.stars);
		console.log(stars);
		return (
			<>
				<div className="star_wrapper" style={{ fontSize: "10px" }}>
					{stars.map((val, idx) => {
						return val == 1 ? (
							<i className="fa fa-star mr-1"></i>
						) : (
							<i className="fa fa-star mr-1" style={{ color: "#E0E0E0" }}></i>
						);
					})}
					{}
					{/* <i className="fa fa-star mr-1"></i>
					<i className="fa fa-star mr-1"></i>
					<i className="fa fa-star mr-1"></i>
					<i className="fa fa-star mr-1"></i> */}
				</div>
			</>
		);
	}
}

export default ReviewStars;
