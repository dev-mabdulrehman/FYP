import React, { Component } from "react";
import routes from "./routes";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";

export class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Switch>
						{routes.map(({ path, component, exact }, index) => {
							console.log(path, exact);
							return (
								<Route
									path={path}
									key={index}
									exact={exact == undefined ? true : exact}
									component={component}
								/>
							);
						})}
						<Redirect to="/404" />
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
