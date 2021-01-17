import React, { Component } from "react";
import {
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import HeroHeader from "../components/sub-components/HeroHeader";

export class Login extends Component {
	render() {
		return (
			<>
				<NavbarUser login={false} />
				<div id="Login">
					<HeroHeader>Login</HeroHeader>
					<Container className="mt-5">
						<Row>
							<Col md={{ size: 6, offset: 3 }}>
								<Form
									onSubmit={e => {
										e.preventDefault();
										this.props.history.push("/");
									}}
								>
									<FormGroup>
										<InputGroup>
											<InputGroupAddon addonType="prepend">
												<InputGroupText className="bg-primary text-white">
													<i className="fa fa-envelope"></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input type="email" name="email" placeholder="Email" />
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<InputGroup>
											<InputGroupAddon addonType="prepend" color="primary">
												<InputGroupText className="bg-primary text-white">
													<i className="fa fa-key"></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type="password"
												name="password"
												placeholder="Password"
											/>
										</InputGroup>
									</FormGroup>
									<FormGroup>
										<Input
											type="submit"
											className="btn btn-outline-primary"
											value="Login"
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

export default Login;
