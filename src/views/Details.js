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

export class Details extends Component {
	render() {
		return (
			<>
				<NavbarUser />
				<HeroHeader>Detail</HeroHeader>
				<Container className="my-5" id="Contact">
					<div className="text-center">
						<h4>Provide Members Details</h4>
						<small>People in Group</small>
					</div>
					<Row className="mt-3">
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">Adults</small>
								</Label>
								<Input type="select" value="0" required>
									{new Array(6).fill(1).map((_, idx) => {
										return <option value={idx}>{idx}</option>;
									})}
								</Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">Children</small>
								</Label>
								<Input type="select" value="0" required>
									{new Array(6).fill(1).map((_, idx) => {
										return <option value={idx}>{idx}</option>;
									})}
								</Input>
							</FormGroup>
						</Col>
					</Row>
					<div className="text-center mt-4">
						<h4>Provide Room Details</h4>
					</div>
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">Rooms</small>
								</Label>
								<Input type="select" value="0" required>
									{new Array(6).fill(1).map((_, idx) => {
										return <option value={idx}>{idx}</option>;
									})}
								</Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label className="text-muted mb-2">
									<small className="text-uppercase">Type</small>
								</Label>
								<Input type="select" value="0" required>
									<option value="single">Single</option>
									<option value="double">Double</option>
									<option value="triple">Triple</option>
								</Input>
							</FormGroup>
						</Col>
						<div
							className="btn-wrapper d-flex align-items-center w-100"
							style={{ padding: "0 15px" }}
						>
							<Button
								color="outline-primary"
								className="ml-auto px-4 py-1"
								onClick={() => {
									this.props.history.push("/tour/single/:id/payment");
								}}
							>
								Next
							</Button>
						</div>
					</Row>
				</Container>
			</>
		);
	}
}

export default Details;
