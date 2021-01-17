import React, { Component } from "react";
import { Container, Row, Table, Button } from "reactstrap";
import NavbarCompany from "../../components/NavbarCompany";
import HeroHeader from "../../components/sub-components/HeroHeader";

export class Packages extends Component {
	render() {
		return (
			<>
				<NavbarCompany />
				<div id="Dashboard">
					<HeroHeader>Packages</HeroHeader>
					<Container className="mt-5">
						<Table responsive className="mt-4" hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Days</th>
									<th>Started Date</th>
									<th>Transport</th>
									<th>Room</th>
									<th>Meal</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{new Array(10).fill(1).map((_, idx) => {
									return (
										<tr key={idx}>
											<td>{idx + 1}</td>
											<td>14</td>
											<td>dd/mm/yyyy</td>
											<td>Yes</td>
											<td>Yes</td>
											<td>No</td>
											<td>
												<Button
													color="dark"
													size="sm"
													onClick={() =>
														this.props.history.push(
															"/company/tour/package/detail"
														)
													}
												>
													<i className="fa fa-eye"></i>
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</Container>
				</div>
			</>
		);
	}
}

export default Packages;
