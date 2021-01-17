import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import SectionHeader from "./SectionHeader";
import TourCard from "./TourCard";

class Section extends Component {
	componentWillMount() {
		this.props.fetchTour();
	}
	render() {
		return (
			<>
				<section className={`${this.props.title.replace(" ", "-")}s py-5`}>
					<Container>
						<SectionHeader title={`${this.props.title}s`} />
						<Row>
							{[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => {
								return (
									<Col
										key={idx}
										md={{ size: 4, offset: idx === 6 ? 2 : 0 }}
										lg={{ size: 3, offset: 0 }}
										sm={{ size: 6, offset: 0 }}
										xs={{ size: 8, offset: 2 }}
										className="mb-4"
									>
										<TourCard
											imageText={this.props.title}
											parentLink={`tour/single/${item}`}
										/>
									</Col>
								);
							})}
						</Row>
						<div className="button_wrapper text-center mt-3">
							<Link
								to={`tour/${this.props.link}`}
								className="btn btn-outline-primary px-5"
							>
								See All
							</Link>
						</div>
					</Container>
				</section>
			</>
		);
	}
}

export default Section;
