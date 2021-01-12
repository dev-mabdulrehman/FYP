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

export class NavbarUser extends Component {
	state = {
		logged_in: false,
		scrollY: 0,
		navbar: false,
	};
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}
	handleScroll = event => {
		let scroll = window.scrollY;
		this.setState({
			...this.state,
			scrollY: scroll,
		});
	};
	render() {
		return (
			<>
				<Navbar
					className={`custom-navbar fixed-top ${
						this.state.scrollY > 5 ? "active" : ""
					}`}
					expand="md"
				>
					<Container>
						<NavbarBrand href="/">Tour Hunting</NavbarBrand>
						<Button
							color="white"
							className="navbar-toggler"
							onClick={() =>
								this.setState({ ...this.state, navbar: !this.state.navbar })
							}
						>
							<i className="fa fa-bars"></i>
						</Button>
						<Collapse isOpen={this.state.navbar} navbar>
							<Nav className="ml-auto" navbar>
								{routes.map(
									({ text, path, menu }) =>
										menu && (
											<NavItem>
												<Link className="nav-link" to={path}>
													{text}
												</Link>
											</NavItem>
										)
								)}
							</Nav>
							{this.state.logged_in ? <LinksLogged /> : <LinksNotLogged />}
						</Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}

export default NavbarUser;