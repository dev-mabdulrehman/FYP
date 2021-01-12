import React from "react";
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
						<DropdownItem>Settings</DropdownItem>
						<DropdownItem>Logout</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
			</Nav>
		</>
	);
}

export default LinksLogged;
