import React, { Component } from "react";
import { Button, Col, Container, Row, Table } from "reactstrap";
import NavbarCompany from "../../components/NavbarCompany";
import HeroHeader from "../../components/sub-components/HeroHeader";

export class ViewTour extends Component {
	render() {
		return (
			<>
				<NavbarCompany />
				<div id="Dashboard">
					<HeroHeader>Detail</HeroHeader>
					<div
						className="tour_wrapper"
						style={{ margin: "0 auto", maxWidth: "480px" }}
					>
						<Container className="my-5">
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
											<b>Status:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>Completed</small>
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
											<b>Transport:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>Yes</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Room:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>Yes</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Meal:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>Yes</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Meal times:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>2</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Bookings:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>5</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>People Booked:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>20</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>People on tour:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>18</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>No. of Adults:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>8</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>No. of Children:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>10</small>
									</Col>
								</Row>
							</div>
							<div className="payment-info-wrapper">
								<p className="text-center font-weight-bold">Payment Info</p>
								<hr />
								<Row>
									<Col>
										<small>
											<b>Amount Recieved:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>100000</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Amount Returned:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>5000</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Remaining Amount:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>95000</small>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<b>Amount Transfered:</b>
										</small>
									</Col>
									<Col className="text-right">
										<small>95000</small>
									</Col>
								</Row>
							</div>
						</Container>
					</div>
					<Container>
						<div className="clients_wrapper">
							<p className="text-center font-weight-bold">Clients</p>
							<hr />
						</div>
						<Table responsive className="mt-4" hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{new Array(5).fill(1).map((_, idx) => {
									return (
										<tr key={idx}>
											<th scope="row">{idx + 1}</th>
											<td>name</td>
											<td>XXXXXXX@XXXX.com</td>
											<td>+923XXXXXXXXX</td>
											<td>
												<Button
													color="dark"
													size="sm"
													onClick={() =>
														this.props.history.push(
															"/company/tour/package/detail/client"
														)
													}
												>
													<i className="fa fa-eye"></i>
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</Container>
				</div>
			</>
		);
	}
}

export default ViewTour;
