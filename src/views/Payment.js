import React, { Component } from "react";
import {
	Col,
	Container,
	Row,
	Label,
	Input,
	Button,
	Form,
	FormGroup,
} from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import HeroHeader from "../components/sub-components/HeroHeader";

export class Payment extends Component {
	render() {
		console.log(new Date().getFullYear());
		var years = [];
		for (
			var i = new Date().getFullYear();
			i >= new Date().getFullYear() - 10;
			i--
		) {
			years.push(i);
		}
		return (
			<>
				<NavbarUser />
				<HeroHeader>Payment</HeroHeader>
				<Container className="my-5" id="Contact">
					<div className="text-center">
						<h4>Provide Your Card Details</h4>
					</div>
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">Card Number</small>
								</Label>
								<Input
									type="text"
									placeholder="1234XXXXXXXXXXXX"
									required
								></Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">Mobile Number</small>
								</Label>
								<Input type="text" placeholder="+923XXXXXXXXX" required></Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">CVV</small>
								</Label>
								<Input type="text" placeholder="XXX" required></Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">Card Expiry</small>
								</Label>
								<Row>
									<Col md={6}>
										<Input type="select" value="" required>
											<option value="">Month</option>
											<option value="January">January</option>
											<option value="Febuary">Febuary</option>
											<option value="March">March</option>
											<option value="April">April</option>
											<option value="May">May</option>
											<option value="June">June</option>
											<option value="July">July</option>
											<option value="August">August</option>
											<option value="September">September</option>
											<option value="October">October</option>
											<option value="November">November</option>
											<option value="December">December</option>
										</Input>
									</Col>
									<Col md={6}>
										<Input type="select" value="" required>
											<option value="">Year</option>
											{years.map((year, idx) => {
												return (
													<option key={idx} value={year}>
														{year}
													</option>
												);
											})}
										</Input>
									</Col>
								</Row>
							</FormGroup>
						</Col>
						<div
							className="btn-outer_wrapper d-flex align-items-center w-100"
							style={{ padding: "0 15px" }}
						>
							<div className="ml-auto">
								<Button
									color="outline-primary"
									className="px-4 py-1 mr-2"
									onClick={() => {
										this.props.history.push("/tour/single/:id/detail");
									}}
								>
									Back
								</Button>
								<Button
									color="outline-primary"
									className="px-4 py-1"
									onClick={() => {
										this.props.history.push(
											"/tour/package/payment/successfull"
										);
									}}
								>
									Finish
								</Button>
							</div>
						</div>
					</Row>
				</Container>
			</>
		);
	}
}

export default Payment;
