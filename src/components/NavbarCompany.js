import { Link } from "react-router-dom";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	NavLink,
	Collapse,
	Container,
	Button,
} from "reactstrap";
import routes from "../routes";
import LinksLogged from "./sub-components/LinksLogged";
import LinksNotLogged from "./sub-components/LinksNotLogged";
import React, { Component } from "react";

export class NavbarCompany extends Component {
	state = {
		logged_in: true,
		navbar: false,
		innerWidth: window.innerWidth,
		scrollY: window.scrollY,
	};
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("resize", this.handleResize);
	}
	handleScroll = event => {
		let scroll = window.scrollY;
		this.setState({
			...this.state,
			scrollY: scroll,
		});
	};
	handleResize = event => {
		let innerWidth = window.innerWidth;
		this.setState({
			...this.state,
			innerWidth: innerWidth,
		});
	};
	render() {
		return (
			<>
				<Navbar
					className={`custom-navbar fixed-top ${
						this.state.scrollY > 5 || this.state.innerWidth < 768
							? "active"
							: ""
					}`}
					expand="md"
				>
					<Container>
						<Link to="/company/dashboard" className="navbar-brand">
							Company Panel
						</Link>
						{this.props.login ||
							(this.props.login == null && (
								<>
									<Button
										color="white"
										className="navbar-toggler"
										onClick={() =>
											this.setState({
												...this.state,
												navbar: !this.state.navbar,
											})
										}
									>
										<i className="fa fa-bars"></i>
									</Button>
									<Collapse isOpen={this.state.navbar} navbar>
										<Nav className="ml-auto" navbar>
											{routes.map(
												({ text, path, menu, type }) =>
													menu &&
													type == "company" && (
														<NavItem>
															<Link className="nav-link" to={path}>
																{text}
															</Link>
														</NavItem>
													)
											)}
										</Nav>
									</Collapse>
								</>
							))}
					</Container>
				</Navbar>
			</>
		);
	}
}

export default NavbarCompany;
