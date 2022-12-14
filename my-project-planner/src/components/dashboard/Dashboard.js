import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notification";
import { connect } from "react-redux";

class Dashboard extends Component {
	render() {
		const { projects } = this.props;

		// console.log(this.props);
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="div col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="div col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
	};
};
export default connect(mapStateToProps)(Dashboard);
