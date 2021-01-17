import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import SectionHeader from "../components/SectionHeader";
import HeroHeader from "../components/sub-components/HeroHeader";
import TourCard from "../components/TourCard";

function Company() {
	return (
		<>
			<NavbarUser />
			<HeroHeader>Company</HeroHeader>
			<div className="section-wrapper">
				<div className="container my-5" id="About">
					<div className="text-center">
						<h4>About</h4>
					</div>
					<div className="text-justify mt-4">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
							auctor dolor, condimentum viverra sem. Mauris tristique felis
							urna, ac consectetur ipsum porttitor non. Mauris feugiat ex a odio
							vehicula blandit. Proin at dui vel leo iaculis pellentesque nec
							nec risus. Aliquam vehicula tristique tincidunt. Phasellus dapibus
							pharetra vestibulum. Nullam neque mauris, molestie nec ex nec,
							gravida malesuada arcu. Aenean pellentesque urna dui, vitae
							pharetra tortor tincidunt eget. Sed at odio eu diam faucibus
							tincidunt at quis sem. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nam augue neque, hendrerit ut mattis non,
							lobortis sed purus. Pellentesque nisi libero, posuere nec felis
							in, scelerisque aliquam urna. Pellentesque tempor quam neque, non
							pretium dolor scelerisque a. Sed eleifend a libero sodales
							euismod.
						</p>
						<p>
							Class aptent taciti sociosqu ad litora torquent per conubia
							nostra, per inceptos himenaeos. Donec consectetur sapien quis
							convallis aliquet. Phasellus id nulla et sem mollis dignissim.
							Duis tristique aliquam turpis vitae consequat. Nam in lectus ut
							neque sollicitudin tempus eget sit amet eros. Etiam justo orci,
							rhoncus ut ullamcorper et, iaculis id orci. Integer libero libero,
							tristique vel dictum nec, vehicula scelerisque massa. Suspendisse
							venenatis libero ut erat dignissim tempus. Mauris a tincidunt
							mauris. Etiam pretium volutpat lorem, vel tempus lacus tempus ac.
							Nam hendrerit gravida tortor a fringilla. Nullam lorem purus,
							ultricies ut vulputate ornare, tempus vulputate sem. Vivamus vitae
							egestas urna. Sed varius dui non gravida dapibus.
						</p>
						<p>
							Quisque cursus lectus enim, interdum blandit elit imperdiet et.
							Vestibulum vitae ante nisi. Curabitur justo dui, iaculis eget
							dictum et, malesuada sit amet turpis. Vivamus sed tortor ut erat
							imperdiet consequat sit amet ut ex. Proin nibh ex, auctor vel
							felis vel, vestibulum facilisis mi. Ut sit amet eros lacinia,
							molestie dui eget, ultricies nisi. Fusce consectetur neque sed
							lorem gravida luctus. Maecenas vulputate, urna eu blandit
							faucibus, diam augue sagittis orci, ac rutrum est arcu eget dolor.
							Morbi elementum quam risus, eget molestie lectus pharetra sit
							amet. Sed a euismod velit. Donec luctus nisi et lectus venenatis
							ornare eget in turpis. Nullam ultricies nunc gravida leo viverra,
							et accumsan purus fringilla. Vestibulum sit amet lobortis massa.
							Aliquam erat volutpat. Maecenas consectetur metus quis nunc
							tincidunt imperdiet.Quisque cursus lectus enim, interdum blandit
							elit imperdiet et. Vestibulum vitae ante nisi. Curabitur justo
							dui, iaculis eget dictum et, malesuada sit amet turpis. Vivamus
							sed tortor ut erat imperdiet consequat sit amet ut ex. Proin nibh
							ex, auctor vel felis vel, vestibulum facilisis mi. Ut sit amet
							eros lacinia, molestie dui eget, ultricies nisi. Fusce consectetur
							neque sed lorem gravida luctus. Maecenas vulputate, urna eu
							blandit faucibus, diam augue sagittis orci, ac rutrum est arcu
							eget dolor. Morbi elementum quam risus, eget molestie lectus
							pharetra sit amet. Sed a euismod velit. Donec luctus nisi et
							lectus venenatis ornare eget in turpis. Nullam ultricies nunc
							gravida leo viverra, et accumsan purus fringilla. Vestibulum sit
							amet lobortis massa. Aliquam erat volutpat. Maecenas consectetur
							metus quis nunc tincidunt imperdiet.Quisque cursus lectus enim,
							interdum blandit elit imperdiet et. Vestibulum vitae ante nisi.
							Curabitur justo dui, iaculis eget dictum et, malesuada sit amet
							turpis. Vivamus sed tortor ut erat imperdiet consequat sit amet ut
							ex. Proin nibh ex, auctor vel felis vel, vestibulum facilisis mi.
							Ut sit amet eros lacinia, molestie dui eget, ultricies nisi. Fusce
							consectetur neque sed lorem gravida luctus. Maecenas vulputate,
							urna eu blandit faucibus, diam augue sagittis orci, ac rutrum est
							arcu eget dolor. Morbi elementum quam risus, eget molestie lectus
							pharetra sit amet. Sed a euismod velit. Donec luctus nisi et
							lectus venenatis ornare eget in turpis. Nullam ultricies nunc
							gravida leo viverra, et accumsan purus fringilla. Vestibulum sit
							amet lobortis massa. Aliquam erat volutpat. Maecenas consectetur
							metus quis nunc tincidunt imperdiet.
						</p>
					</div>
				</div>

				<section className="py-5">
					<SectionHeader title={`Recently Added Tours`} className="py-5" />
					<Container>
						<Row>
							{new Array(4).fill(1).map((item, idx) => {
								return (
									<Col
										key={idx}
										md={{ size: 4, offset: idx === 3 ? 4 : 0 }}
										lg={{ size: 3, offset: 0 }}
										sm={{ size: 6, offset: 0 }}
										xs={{ size: 8, offset: 2 }}
										className="mb-4"
									>
										<TourCard
											imageText={"demo"}
											parentLink={`/tour/package/${item}`}
										/>
									</Col>
								);
							})}
						</Row>
					</Container>
				</section>
				<section className="py-5">
					<SectionHeader title={`Popular Tours`} className="py-5" />
					<Container>
						<Row>
							{new Array(4).fill(1).map((item, idx) => {
								return (
									<Col
										key={idx}
										md={{ size: 4, offset: idx === 3 ? 4 : 0 }}
										lg={{ size: 3, offset: 0 }}
										sm={{ size: 6, offset: 0 }}
										xs={{ size: 8, offset: 2 }}
										className="mb-4"
									>
										<TourCard
											imageText={"demo"}
											parentLink={`/tour/package/${item}`}
										/>
									</Col>
								);
							})}
						</Row>
					</Container>
				</section>
				<section className="py-5">
					<SectionHeader title={`All Tours`} className="py-5" />
					<Container>
						<Row>
							{new Array(8).fill(1).map((item, idx) => {
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
											imageText={"demo"}
											parentLink={`/tour/package/${item}`}
										/>
									</Col>
								);
							})}
						</Row>
						<div className="button_wrapper text-center mt-3">
							<Link to={`/tour/all`} className="btn btn-outline-primary px-5">
								See All
							</Link>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Company;
