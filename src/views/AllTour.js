import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import HeroHeader from "../components/sub-components/HeroHeader";
import TourCard from "../components/TourCard";

export class AllTour extends Component {
	render() {
		const possibleTypes = ["all", "popular", "recommended", "recently-added"];
		if (
			possibleTypes.filter(type => type === this.props.match.params.type)
				.length === 0
		)
			return (
				<Redirect
					to={{
						pathname: "/404",
						state: { page: `"tour/${this.props.match.params.type}"` },
					}}
				/>
			);
		return (
			<>
				<NavbarUser />
				<HeroHeader>{`${this.props.match.params.type.replace(
					"-",
					" "
				)} tours`}</HeroHeader>
				<div className="pt-5">
					<Container>
						{/* <SectionHeader
							title={`${this.props.match.params.type.replace("-", " ")} tours`}
						/> */}
						<Row>
							{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
								(item, idx) => {
									return (
										<Col
											key={idx}
											md={{ size: 4, offset: idx === 18 ? 2 : 0 }}
											lg={{ size: 3, offset: 0 }}
											sm={{ size: 6, offset: 0 }}
											xs={{ size: 8, offset: 2 }}
											className="mb-4"
										>
											<TourCard
												imageText={this.props.match.params.type.replace(
													"-",
													" "
												)}
												parentLink={`/tour/package/${item}`}
											/>
										</Col>
									);
								}
							)}
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default AllTour;
