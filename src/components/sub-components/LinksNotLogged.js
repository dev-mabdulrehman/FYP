import React from "react";
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
						<DropdownItem href="/user/login">Login</DropdownItem>
						<DropdownItem href="/user/register">Register</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
			</Nav>
		</>
	);
}

export default LinksNotLogged;
