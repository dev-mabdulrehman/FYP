import React, { Component } from "react";
import {
	Container,
	Collapse,
	Row,
	Button,
	Table,
	ButtonGroup,
	ModalHeader,
	Modal,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import NavbarCompany from "../../components/NavbarCompany";
import HeroHeader from "../../components/sub-components/HeroHeader";

export class Tours extends Component {
	state = {
		modal: {
			add: false,
			edit: false,
		},
		tourPkg: [
			{
				days: 0,
				date: "",
				transport: false,
				meal: false,
				room: false,
				meal_times: 0,
				collapse: false,
			},
		],
	};
	toggleModal = type => {
		let { modal } = this.state;
		modal[type] = !modal[type];
		this.setState({ modal });
	};
	render() {
		return (
			<>
				<NavbarCompany />
				<div id="Tours">
					<HeroHeader>Tours</HeroHeader>
					<Container className="mt-5">
						<div className="button_wrapper d-flex align-items-center">
							<Button
								color="outline-primary"
								className="ml-auto px-4"
								onClick={() => this.toggleModal("add")}
							>
								Add Tour
							</Button>
						</div>
						<Table responsive className="mt-4" hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Date Added</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{new Array(10).fill(1).map((_, idx) => (
									<tr key={idx}>
										<th scope="row">{idx + 1}</th>
										<td>Tour</td>
										<td>dd/mm/yyyy</td>
										<td>
											<ButtonGroup>
												<Button
													size="sm"
													color="primary"
													onClick={() => this.toggleModal("edit")}
												>
													<i className="fa fa-pencil"></i>
												</Button>
												<Button size="sm" color="danger">
													<i className="fa fa-trash"></i>
												</Button>
												<Button
													size="sm"
													color="dark"
													onClick={() =>
														this.props.history.push("/company/tour/packages")
													}
												>
													<i className="fa fa-eye"></i>
												</Button>
											</ButtonGroup>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Container>
				</div>
				<Modal
					isOpen={this.state.modal.add}
					toggle={() => this.toggleModal("add")}
					className={this.props.className}
					centered
					size="lg"
				>
					<ModalHeader toggle={() => this.toggleModal("add")}>
						Add Tour
					</ModalHeader>
					<Form onSubmit={e => e.preventDefault()}>
						<ModalBody>
							<FormGroup>
								<Label>Name</Label>
								<Input type="text" name="name" />
							</FormGroup>
							{this.state.tourPkg.map((pkg, idx) => (
								<div className="package_wrapper mb-2  border rounded py-2 px-4">
									<div className="d-flex align-items-center ">
										Package {idx + 1}
										<div className="btn-wrapper ml-auto">
											<Button
												color="primary"
												onClick={() => {
													let { tourPkg } = this.state;
													tourPkg[idx].collapse = !tourPkg[idx].collapse;
													this.setState({ tourPkg });
												}}
											>
												{this.state.tourPkg[idx].collapse ? (
													<i className="fa fa-minus"></i>
												) : (
													<i className="fa fa-plus"></i>
												)}
											</Button>
											{this.state.tourPkg.length > 1 && (
												<Button
													color="danger"
													className="ml-2"
													onClick={() => {
														let { tourPkg } = this.state;
														let newTourPkg = tourPkg.filter(
															(_, idxIt) => idxIt != idx
														);
														this.setState({ tourPkg: newTourPkg });
													}}
												>
													<i className="fa fa-trash"></i>
												</Button>
											)}
										</div>
									</div>
									<Collapse isOpen={this.state.tourPkg[idx].collapse}>
										<hr />
										<FormGroup>
											<Label>Days</Label>
											<Input type="number" name="days" />
										</FormGroup>
										<FormGroup>
											<Label>Date</Label>
											<Input type="date" name="date" />
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input type="checkbox" /> Transport
											</Label>
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input type="checkbox" /> Room
											</Label>
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input type="checkbox" /> Meal
											</Label>
										</FormGroup>
										<FormGroup>
											<Label>Meal Times</Label>
											<Input type="number" name="meal_times" />
										</FormGroup>
									</Collapse>
								</div>
							))}

							<div className="btn-wrapper d-flex mt-2">
								<Button
									type="button"
									className="ml-auto"
									onClick={() => {
										let { tourPkg } = this.state;
										let newPkg = {
											days: 0,
											date: "",
											transport: false,
											meal: false,
											room: false,
											meal_times: 0,
											collapse: false,
										};
										tourPkg.push(newPkg);
										this.setState({ tourPkg });
									}}
								>
									Add Package
								</Button>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={() => this.toggleModal("add")}>
								Save
							</Button>{" "}
							<Button color="secondary" onClick={() => this.toggleModal("add")}>
								Cancel
							</Button>
						</ModalFooter>
					</Form>
				</Modal>
				<Modal
					isOpen={this.state.modal.edit}
					toggle={() => this.toggleModal("edit")}
					className={this.props.className}
					centered
					size="lg"
				>
					<ModalHeader toggle={() => this.toggleModal("edit")}>
						Edit Tour
					</ModalHeader>
					<Form onSubmit={e => e.preventDefault()}>
						<ModalBody>
							<FormGroup>
								<Label>Name</Label>
								<Input type="text" name="name" />
							</FormGroup>
							{this.state.tourPkg.map((pkg, idx) => (
								<div className="package_wrapper mb-2  border rounded py-2 px-4">
									<div className="d-flex align-items-center ">
										Package {idx + 1}
										<div className="btn-wrapper ml-auto">
											<Button
												color="primary"
												onClick={() => {
													let { tourPkg } = this.state;
													tourPkg[idx].collapse = !tourPkg[idx].collapse;
													this.setState({ tourPkg });
												}}
											>
												{this.state.tourPkg[idx].collapse ? (
													<i className="fa fa-minus"></i>
												) : (
													<i className="fa fa-plus"></i>
												)}
											</Button>
											{this.state.tourPkg.length > 1 && (
												<Button
													color="danger"
													className="ml-2"
													onClick={() => {
														let { tourPkg } = this.state;
														let newTourPkg = tourPkg.filter(
															(_, idxIt) => idxIt != idx
														);
														this.setState({ tourPkg: newTourPkg });
													}}
												>
													<i className="fa fa-trash"></i>
												</Button>
											)}
										</div>
									</div>
									<Collapse isOpen={this.state.tourPkg[idx].collapse}>
										<hr />
										<FormGroup>
											<Label>Days</Label>
											<Input type="number" name="days" />
										</FormGroup>
										<FormGroup>
											<Label>Date</Label>
											<Input type="date" name="date" />
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input type="checkbox" /> Transport
											</Label>
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input type="checkbox" /> Room
											</Label>
										</FormGroup>
										<FormGroup check>
											<Label check>
												<Input type="checkbox" /> Meal
											</Label>
										</FormGroup>
										<FormGroup>
											<Label>Meal Times</Label>
											<Input type="number" name="meal_times" />
										</FormGroup>
									</Collapse>
								</div>
							))}

							<div className="btn-wrapper d-flex mt-2">
								<Button
									type="button"
									className="ml-auto"
									onClick={() => {
										let { tourPkg } = this.state;
										let newPkg = {
											days: 0,
											date: "",
											transport: false,
											meal: false,
											room: false,
											meal_times: 0,
											collapse: false,
										};
										tourPkg.push(newPkg);
										this.setState({ tourPkg });
									}}
								>
									Add Package
								</Button>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={() => this.toggleModal("edit")}>
								Update
							</Button>{" "}
							<Button
								color="secondary"
								onClick={() => this.toggleModal("edit")}
							>
								Cancel
							</Button>
						</ModalFooter>
					</Form>
				</Modal>
			</>
		);
	}
}

export default Tours;
