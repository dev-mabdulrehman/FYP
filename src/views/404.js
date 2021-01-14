import React from "react";
import { Container } from "reactstrap";
import NavbarUser from "../components/NavbarUser";

function _404(props) {
	return (
		<>
			<NavbarUser />
			<div
				className="container-wrapper d-flex align-items-center justify-content-center"
				style={{ marginTop: "60px" }}
			>
				<Container className="text-center">
					<div className="content-wrapper">
						<h1 className="text-large">404</h1>
						<p>
							<b>
								Page {props.location.state && props.location.state.page} Not
								Found
							</b>
						</p>
					</div>
				</Container>
			</div>
		</>
	);
}

export default _404;
