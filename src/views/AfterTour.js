import React, { Component } from "react";
import {
	Button,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
} from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import Review from "../components/Review";
import HeroHeader from "../components/sub-components/HeroHeader";

export class AfterTour extends Component {
	state = {
		stars: 0,
		selectedStar: 0,
	};
	changeStars = stars => {
		this.setState({ stars: stars });
	};
	setStars = stars => {
		this.setState({ selectedStar: stars });
	};
	render() {
		return (
			<>
				<NavbarUser />
				<HeroHeader>Tour Completed</HeroHeader>
				<Container className="my-5">
					<div className="text-center">
						<h4>Provide Feedback to help others</h4>
					</div>
					<Row>
						<Col md={{ size: 6, offset: 3 }}>
							<Form
								onSubmit={e => {
									e.preventDefault();
								}}
							>
								<FormGroup className="mb-0">
									<Label className="mr-2">Rating:</Label>
									{new Array(5)
										.fill(1)
										.map((val, i) =>
											i < this.state.stars ? (
												<i
													key={i}
													className="fa fa-star"
													style={{ color: "#2f2f2f", cursor: "pointer" }}
													onMouseEnter={() => this.changeStars(i + 1)}
													onMouseLeave={() =>
														this.changeStars(this.state.selectedStar)
													}
													onClick={() => this.setStars(i + 1)}
												></i>
											) : (
												<i
													key={i}
													className="fa fa-star"
													style={{ color: "#b0b0b0", cursor: "pointer" }}
													onMouseEnter={() => this.changeStars(i + 1)}
													onMouseLeave={() =>
														this.changeStars(this.state.selectedStar)
													}
													onClick={() => this.setStars(i + 1)}
												></i>
											)
										)}
								</FormGroup>
								<FormGroup>
									<Input
										type="textarea"
										style={{ minHeight: "200px" }}
										name="review"
										placeholder="Enter your review here..."
									/>
								</FormGroup>
								<FormGroup>
									<Input
										type="submit"
										className="btn btn-outline-primary"
										value="Submit"
									/>
								</FormGroup>
							</Form>
						</Col>
						<div className="review_wrapper">
							<div className="text-center mt-5 mb-2">
								<h4>Reviews</h4>
							</div>
							<Review
								stars={4}
								clientName="John"
								date="29/12/2020"
								review="Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien. Nunc viverra tincidunt erat eget laoreet. Quisque
							dignissim sapien non lectus ornare ultricies at sed purus. Ut
							tincidunt mattis lectus a suscipit."
							/>
							<Review
								stars={3}
								clientName="Ajay"
								date="20/11/2020"
								review="Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien. Nunc viverra tincidunt erat eget laoreet."
							/>
							<Review
								stars={5}
								clientName="Ismail"
								date="19/11/2020"
								review="Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien. Nunc viverra tincidunt erat eget laoreet. Quisque
							dignissim sapien non lectus ornare ultricies at sed purus. Ut
							tincidunt mattis lectus a suscipit.Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien. Nunc viverra tincidunt erat eget laoreet. Quisque
							dignissim sapien non lectus ornare ultricies at sed purus. Ut
							tincidunt mattis lectus a suscipit."
							/>
							<Review
								stars={1}
								clientName="Ibrahim"
								date="17/11/2020"
								review="Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien.Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien."
							/>
							<Review
								stars={0}
								clientName="Kamran"
								date="15/10/2020"
								review="Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien."
							/>
							<Review
								stars={2}
								clientName="Waqas"
								date="20/09/2020"
								review="Aliquam nec ligula arcu. Vivamus id placerat augue, eu sodales
							sapien.nec ligula arcu. Vivamus id placerat augue,nec ligula arcu. Vivamus id placerat augue,nec ligula arcu. Vivamus id placerat augue,"
							/>
						</div>
					</Row>
				</Container>
			</>
		);
	}
}

export default AfterTour;
