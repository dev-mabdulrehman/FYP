import React from "react";
import { Link } from "react-router-dom";
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Nav,
} from "reactstrap";

function LinksLogged() {
	return (
		<>
			<Nav navbar>
				<UncontrolledDropdown nav inNavbar>
					<DropdownToggle nav caret>
						<i className="fa fa-user"></i>
					</DropdownToggle>
					<DropdownMenu right>
						<Link to="/user/history" className="dropdown-item">
							History
						</Link>
						<Link to="/user/settings" className="dropdown-item">
							Settings
						</Link>
						<Link to="/user/login" className="dropdown-item">
							Logout
						</Link>
					</DropdownMenu>
				</UncontrolledDropdown>
			</Nav>
		</>
	);
}

export default LinksLogged;
