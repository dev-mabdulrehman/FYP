import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import HeroHeader from "../components/sub-components/HeroHeader";

export class PaymentSucessfull extends Component {
	state = {
		redirect: false,
		sec: 30,
	};
	componentWillMount() {
		setInterval(() => {
			this.setState({
				sec: this.state.sec - 1,
			});
			if (this.state.sec == 0) {
				this.setState({
					redirect: true,
				});
			}
		}, 1000);
	}
	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}
		return (
			<>
				<NavbarUser />
				<HeroHeader>
					Payment Sucessfull
					<br />
				</HeroHeader>
				<div className="text-center mt-3">
					<small>
						<b>
							You will be redirected to homepage in {this.state.sec} seconds. If
							not, <Link to="/">Click Here</Link>
						</b>
					</small>
					<br />
					<small>
						<b>
							Payment and Booking Detail Will be sent on your Registered Phone
							number Via SMS.
						</b>
					</small>
				</div>
				<Container className="my-5" id="Contact">
					<div
						className="payment_sucess_wrapper"
						style={{ maxWidth: "480px", margin: "0 auto" }}
					>
						<Row className="mt-2">
							<Col>
								<small className="text-muted">Payment Type</small>
							</Col>
							<Col>
								<small>
									<b>ABC</b>
								</small>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col>
								<small className="text-muted">Mobile</small>
							</Col>
							<Col>
								<small>
									<b>+923XXXXXXXXX</b>
								</small>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col>
								<small className="text-muted">Email</small>
							</Col>
							<Col>
								<small>
									<b>XXXXX@XXXX.com</b>
								</small>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col>
								<small className="text-muted">Amount Paid</small>
							</Col>
							<Col>
								<small>
									<b>5000</b>
								</small>
							</Col>
						</Row>
						<Row className="mt-2">
							<Col>
								<small className="text-muted">Transaction ID</small>
							</Col>
							<Col>
								<small>
									<b>1hh6as271</b>
								</small>
							</Col>
						</Row>
					</div>
				</Container>
			</>
		);
	}
}

export default PaymentSucessfull;
