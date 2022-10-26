import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notification";

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="div col s12 m6">
						<ProjectList />
					</div>
					<div className="div col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
