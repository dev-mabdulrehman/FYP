import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import HeroHeader from "../components/sub-components/HeroHeader";

export class HistoryDetail extends Component {
	render() {
		return (
			<>
				<NavbarUser />
				<HeroHeader>History Detail</HeroHeader>
				<div className="container my-5" id="History">
					<div
						className="histroy_wrapper"
						style={{ margin: "0 auto", maxWidth: "480px" }}
					>
						<Container>
							<span
								onClick={() => this.props.history.push("/user/history")}
								style={{ cursor: "pointer" }}
							>
								<i className="fa fa-arrow-left"></i>{" "}
								<span className="ml-2">Back</span>
							</span>
							<div className="tour-info-wrapper">
								<p className="text-center font-weight-bold">Tour Info</p>
								<hr />
								<Row>
									<Col>
										<small>
											<b>Name:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>tour</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Days:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>14</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Company:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>name</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Started Date:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>dd/mm/yyyy</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Started Time:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>hh:mm:ss</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Ended Date:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>dd/mm/yyyy</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Ended Time:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>hh:mm:ss</small>
									</Col>
								</Row>
							</div>

							<div className="basic-info-wrapper mt-2">
								<p className="text-center font-weight-bold">Basic Info</p>
								<hr />
								<Row>
									<Col>
										<small>
											<b>Adults:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>4</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Children:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>2</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Room:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>1</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Room Type:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>Triple</small>
									</Col>
								</Row>
							</div>

							<div className="payment-info-wrapper mt-2">
								<p className="text-center font-weight-bold">Payment Info</p>
								<hr />
								<Row>
									<Col>
										<small>
											<b>Payment Type:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>Abc</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Phone:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>+9231XXXXXX53</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Email:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>deXXX@gmail.com</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Amount Paid:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>5000</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Transaction ID:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>1hh6as271</small>
									</Col>
								</Row>
							</div>
						</Container>
					</div>
				</div>
			</>
		);
	}
}

export default HistoryDetail;
