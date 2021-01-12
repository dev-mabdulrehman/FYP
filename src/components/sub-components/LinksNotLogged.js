import React from "react";
import { Link } from "react-router-dom";
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Nav,
} from "reactstrap";

function LinksNotLogged() {
	return (
		<>
			<Nav navbar>
				<UncontrolledDropdown nav inNavbar>
					<DropdownToggle nav caret>
						<i className="fa fa-user"></i>
					</DropdownToggle>
					<DropdownMenu right>
						<Link className="dropdown-item" to="/user/login">
							Login
						</Link>
						<Link className="dropdown-item" to="/user/register">
							Register
						</Link>
					</DropdownMenu>
				</UncontrolledDropdown>
			</Nav>
		</>
	);
}

export default LinksNotLogged;
