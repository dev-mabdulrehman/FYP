import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg } from "reactstrap";

export class TourCard extends Component {
	render() {
		return (
			<>
				<Link to={`${this.props.parentLink}`}>
					<Card style={{ position: "relative" }}>
						<CardImg
							top
							width="100%"
							src={`https://dummyimage.com/720x480/000/fff&text=${this.props.imageText}`}
							alt="Tour Image"
						/>
						<CardBody
							className="p-0 px-2 py-1"
							style={{
								backgroundColor: "rgba(255,255,255,.75)",
								position: "absolute",
								bottom: "0",
								width: "100%",
								fontFamily: "Poppins",
								fontWeight: "bold",
							}}
						>
							<div className="d-flex align-items-center text-dark">
								<small
									className="ml-auto"
									style={{ fontSize: "11.5px", fontWeight: "bold" }}
								>
									14 <span className="text-uppercase">days</span>
								</small>
							</div>
							<div
								className="d-flex align-items-center text-dark"
								style={{ fontSize: "14px" }}
							>
								<span>Title</span>
								<span className="ml-auto">Rs. 1000</span>
							</div>
						</CardBody>
					</Card>
				</Link>
			</>
		);
	}
}

export default TourCard;
