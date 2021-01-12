import React from "react";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import HeroHeader from "../components/sub-components/HeroHeader";

function Contact() {
	return (
		<>
			<NavbarUser />
			<HeroHeader>Contact Us</HeroHeader>
			<Container className="my-5" id="Contact">
				<Row>
					<Col md={{ size: 6, offset: 3 }}>
						<Form
							onSubmit={e => {
								e.preventDefault();
							}}
						>
							<FormGroup>
								<Input type="email" name="email" placeholder="Your Email" />
							</FormGroup>
							<FormGroup>
								<Input type="text" name="phone" placeholder="Your Phone" />
							</FormGroup>
							<FormGroup>
								<Input
									type="textarea"
									name="message"
									placeholder="Your Message..."
									rows={8}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									type="submit"
									className="btn btn-outline-primary"
									value="Send"
								/>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Contact;
