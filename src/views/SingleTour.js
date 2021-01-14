import React, { Component } from "react";
import { Container, Col, Row, Table, Button } from "reactstrap";
import ChatBox from "../components/ChatBox";
import NavbarUser from "../components/NavbarUser";
import Review from "../components/Review";

export class SingleTour extends Component {
	state = {
		chat: true,
	};
	changeChatStatus = () => {
		this.setState({
			chat: !this.state.chat,
		});
	};
	render() {
		return (
			<>
				<NavbarUser />
				<Container style={{ margin: "60px auto" }}>
					<Row>
						<Col md={5} lg={4}>
							<img
								src={`https://dummyimage.com/720x480/000/fff`}
								className="img-fluid"
							/>
							<div className="detail mt-2" style={{ fontFamily: "Poppins" }}>
								<h3>Name</h3>
								<div className="mb-2">
									<p className="m-0">Overall Review:</p>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star" style={{ color: "#b0b0b0" }}></i>
									<br />
									<small>3.95 out of 5 stars based on 20 Reviews</small>
								</div>
								<p className="m-0">
									<b>Days</b> : 15days
								</p>
								<p className="m-0">
									<b>Price</b> : 1000
								</p>
								<p className="m-0">
									<b>Company</b> : name
								</p>
								<Button
									className="w-100 mt-2"
									onClick={() => this.changeChatStatus()}
								>
									Chat
								</Button>
								<Button className="w-100 mt-1 mb-1 mb-md-0">Book Now</Button>
							</div>
						</Col>
						<Col md={7} lg={8}>
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
						</Col>
					</Row>
				</Container>
				<ChatBox chat={this.state.chat} changeHandle={this.changeChatStatus} />
			</>
		);
	}
}

export default SingleTour;
