import React, { Component } from "react";
import { ButtonGroup, Table, Button } from "reactstrap";
import NavbarUser from "../components/NavbarUser";
import HeroHeader from "../components/sub-components/HeroHeader";

export class History extends Component {
	render() {
		return (
			<>
				<NavbarUser />
				<HeroHeader>History</HeroHeader>
				<div className="container my-5" id="History">
					<Table hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{new Array(5).fill(1).map((_, idx) => {
								return (
									<tr>
										<th scope="row">{idx + 1}</th>
										<td>Tour</td>
										<td>14</td>
										<td>
											<Button
												size="sm"
												onClick={() =>
													this.props.history.push("/user/history/detail/")
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
				</div>
			</>
		);
	}
}

export default History;
