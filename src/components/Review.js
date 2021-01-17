import React, { Component } from "react";
import ReviewStars from "./sub-components/ReviewStars";

export class Review extends Component {
	render() {
		return (
			<>
				<div className="review_wrapper mb-2">
					<div
						className="d-flex align-items-start review_header font-weight-bold"
						style={{
							backgroundColor: "#BDBDBD",
							boxSizing: "border-box",
							padding: "10px 20px",
							fontFamily: "Poppins",
						}}
					>
						<span>
							{this.props.clientName}
							<br />
							<ReviewStars stars={this.props.stars} />
						</span>
						<span className="ml-auto">{this.props.date}</span>
					</div>
					<div
						className="review_body"
						style={{ backgroundColor: "#fafbfd", padding: "10px 20px" }}
					>
						<p className="p-0 m-0 text-justify">{this.props.review}</p>
					</div>
				</div>
			</>
		);
	}
}

export default Review;
