import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NavbarCompany from "../../components/NavbarCompany";
import Review from "../../components/Review";
import HeroHeader from "../../components/sub-components/HeroHeader";

export class ClientDetail extends Component {
	render() {
		return (
			<>
				<NavbarCompany />
				<div id="">
					<HeroHeader>Detail</HeroHeader>
					<div
						className="client_detail_wrapper"
						style={{ margin: "0 auto", maxWidth: "480px" }}
					>
						<Container className="my-5">
							<div className="tour-info-wrapper">
								<p className="text-center font-weight-bold">
									Client Detailed Info
								</p>
								<hr />
								<Row>
									<Col>
										<small>
											<b>Name:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>name</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Email:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>XXXXXXX@XXXX.com</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Phone:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>+923XXXXXXXXX</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Total Members:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>4</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Adult:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>3</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Children:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>1</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Person on tour:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>4</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Payment Method:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>JazzCash</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Payment Date:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>dd/mm/yyyy</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Payment Time:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>hh:mm:ss</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Payment Amount:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>2000</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Transaction Id:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>zl1si2jA</small>
									</Col>
								</Row>
							</div>
						</Container>
					</div>
					<Container>
						<p className="text-center font-weight-bold">Client Review</p>
						<hr />
						<Review
							stars={3}
							clientName="name"
							review="Ut non sapien ut sem blandit vehicula sed vitae mi. Cras volutpat elit at turpis aliquam,"
						/>
					</Container>
				</div>
			</>
		);
	}
}

export default ClientDetail;
