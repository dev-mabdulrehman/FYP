import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import HeroHeader from "../components/sub-components/HeroHeader";

export class PaymentFailed extends Component {
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
					Payment Failed
					<br />
				</HeroHeader>
				<div className="text-center mt-3">
					<h2 className="my-5">
						There are some error in payment processing! Kindly Try Again Later.
					</h2>
					<small>
						<b>
							You will be redirected to homepage in {this.state.sec} seconds. If
							not, <Link to="/">Click Here</Link>
						</b>
						<br />
					</small>
				</div>
			</>
		);
	}
}

export default PaymentFailed;
