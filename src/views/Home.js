import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import IconBox from "../components/IconBox";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Team from "../components/Team";
import { connect } from "react-redux";
import { fetchTour } from "../redux/actions/tourActions";
import NavbarUser from "../components/NavbarUser";
import { UncontrolledCarousel } from "reactstrap";

const items = [
	{
		src:
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		altText: "Slide 1",
		caption: "Slide 1",
		header: "Slide 1 Header",
		key: "1",
	},
	{
		src:
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		altText: "Slide 2",
		caption: "Slide 2",
		header: "Slide 2 Header",
		key: "2",
	},
	{
		src:
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		altText: "Slide 3",
		caption: "Slide 3",
		header: "Slide 3 Header",
		key: "3",
	},
];

export class Home extends Component {
	state = {
		logged_in: false,
	};
	componentWillMount() {}
	render() {
		const tourTypes = [
			{
				title: "recommended tour",
				link: "recommended",
				tours: [],
				all: [],
				fetchTour: async () => await this.props.fetchTour("recommended", 8),
				fetchAllTours: () => {},
			},
			{
				title: "recently added tour",
				link: "recently-added",
				tours: [],
				all: [],
				fetchTour: async () => await this.props.fetchTour("recently_added", 8),
				fetchAllTours: () => {},
			},
			{
				title: "popular tour",
				link: "popular",
				tours: [],
				all: [],
				fetchTour: async () => await this.props.fetchTour("popular", 8),
				fetchAllTours: () => {},
			},
		];
		return (
			<>
				<NavbarUser />
				<div className="section-wrapper mt-5">
					{tourTypes.map(({ title, link, fetchTour }, idx) => {
						if (title != "recommended tour" || this.state.logged_in) {
							return (
								<Section
									key={idx}
									title={title}
									link={link}
									fetchTour={fetchTour}
								/>
							);
						}
					})}

					<div
						className="detail py-5"
						style={{
							backgroundImage:
								"url(https://www.wallpapertip.com/wmimgs/0-3408_wallpapers-and-backgrounds-hd-nature-background-images-hd.jpg)",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "fixed",
						}}
					>
						<div className="overlay"></div>
						<Container>
							<Row>
								<Col md={3} className="text-center">
									<IconBox
										className="mt-5"
										title="Companies"
										count={106}
										icon="building"
									/>
								</Col>
								<Col md={3} className="text-center">
									<IconBox
										className="mt-5"
										title="Users"
										count={461}
										icon="user"
									/>
								</Col>
								<Col md={3} className="text-center">
									<IconBox
										className="mt-5"
										title="Sucessful tours"
										count={36}
										icon="globe"
									/>
								</Col>
								<Col md={3} className="text-center">
									<IconBox
										className="mt-5"
										title="Best Feedbacks"
										count={126}
										icon="commenting"
									/>
								</Col>
							</Row>
						</Container>
					</div>

					<section className="testimonials py-5">
						<Container>
							<SectionHeader title="Testiomonials" />
							<UncontrolledCarousel items={items} />
						</Container>
					</section>

					<section className="team py-5">
						<Container>
							<SectionHeader title="Team" />
							<Row>
								<Col sm={4}>
									<Team
										image="https://dummyimage.com/150x150/000/fff"
										name="Name"
										designation="Designation"
									/>
								</Col>
								<Col sm={4}>
									<Team
										image="https://dummyimage.com/150x150/000/fff"
										name="Name"
										designation="Designation"
									/>
								</Col>
								<Col sm={4}>
									<Team
										image="https://dummyimage.com/150x150/000/fff"
										name="Name"
										designation="Designation"
									/>
								</Col>
							</Row>
						</Container>
					</section>
				</div>
			</>
		);
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchTour: (type, limit) => dispatch(fetchTour(type, limit)),
	};
}

export default connect(null, mapDispatchToProps)(Home);
