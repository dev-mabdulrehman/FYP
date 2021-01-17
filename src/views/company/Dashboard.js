import React, { Component } from "react";
import {
	Button,
	Card,
	CardText,
	CardTitle,
	Col,
	Container,
	Row,
} from "reactstrap";
import NavbarCompany from "../../components/NavbarCompany";
import HeroHeader from "../../components/sub-components/HeroHeader";

export class Dashboard extends Component {
	render() {
		return (
			<>
				<NavbarCompany />
				<div id="Dashboard">
					<HeroHeader>Dashboard</HeroHeader>
					<Container className="mt-5">
						<Row>
							<Col md={4} lg={3} className="mb-4">
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">All Tours</span>
									</CardTitle>
									<CardText>99</CardText>
								</Card>
							</Col>
							<Col md={4} lg={3} className="mb-4">
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">
											Completed Tours
										</span>
									</CardTitle>
									<CardText>97</CardText>
								</Card>
							</Col>
							<Col md={4} lg={3} className="mb-4">
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">
											Pending Tours
										</span>
									</CardTitle>
									<CardText>1</CardText>
								</Card>
							</Col>
							<Col md={4} lg={3} className="mb-4">
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">
											In Progress Tours
										</span>
									</CardTitle>
									<CardText>1</CardText>
								</Card>
							</Col>
							<Col md={4} lg={3} className="mb-4">
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">
											Company Value
										</span>
									</CardTitle>
									<CardText>100000</CardText>
								</Card>
							</Col>
							<Col md={4} lg={3} className="mb-4">
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">
											Overall Rating
										</span>
									</CardTitle>
									<CardText>3.9</CardText>
								</Card>
							</Col>
							<Col
								md={{ size: 4, offset: 2 }}
								lg={{ size: 3, offset: 0 }}
								className="mb-4"
							>
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">Last Tour</span>
									</CardTitle>
									<CardText>dd/mm/yyyy</CardText>
								</Card>
							</Col>
							<Col md={4} lg={3} className="mb-4">
								<Card
									body
									style={{
										backgroundColor: "#333",
										borderColor: "#333",
										color: "#f2f2f2",
									}}
								>
									<CardTitle tag="h6">
										<span className="text-muted text-uppercase">
											Upcoming Tour
										</span>
									</CardTitle>
									<CardText>dd/mm/yyyy</CardText>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default Dashboard;
