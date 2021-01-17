import React, { Component } from "react";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import NavbarCompany from "../../components/NavbarCompany";
import HeroHeader from "../../components/sub-components/HeroHeader";

export class Register extends Component {
	render() {
		return (
			<>
				<NavbarCompany login={false} />
				<div id="Register">
					<HeroHeader>Register</HeroHeader>
					<Container className="mt-5">
						<Row>
							<Col md={{ size: 6, offset: 3 }}>
								<Form
									onSubmit={e => {
										e.preventDefault();
									}}
								>
									<Row>
										<Col>
											<FormGroup>
												<Input
													type="text"
													name="firstname"
													placeholder="First Name"
												/>
											</FormGroup>
										</Col>
										<Col>
											<FormGroup>
												<Input
													type="text"
													name="lastname"
													placeholder="Last Name"
												/>
											</FormGroup>
										</Col>
									</Row>
									<FormGroup>
										<Input type="email" name="email" placeholder="Email" />
									</FormGroup>
									<FormGroup>
										<Input type="text" name="phone" placeholder="Phone" />
									</FormGroup>
									<FormGroup>
										<Input
											type="text"
											name="company_name"
											placeholder="Company Name"
										/>
									</FormGroup>
									<FormGroup>
										<Input
											type="text"
											name="company_location"
											placeholder="Company Location"
										/>
									</FormGroup>
									<FormGroup>
										<Input
											type="password"
											name="password"
											placeholder="Password"
										/>
									</FormGroup>
									<FormGroup>
										<Input
											type="password"
											name="rpass"
											placeholder="Confirm Password"
										/>
									</FormGroup>
									<FormGroup>
										<Input
											type="submit"
											className="btn btn-outline-primary"
											value="Register"
										/>
									</FormGroup>
								</Form>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default Register;
