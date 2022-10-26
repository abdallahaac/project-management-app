import React, { Component } from "react";

class CreateProject extends Component {
	state = {
		title: "",
		content: "",
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="container">
				<h4 className="grey-text text-darken-3">Create Project </h4>
				<form onSubmit={this.handleSubmit} className="white">
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>

					{/* password form */}
					<div className="input-field">
						<label htmlFor="content"> Project Content </label>
						<textarea
							id="content"
							className="materialize-textarea"
							onChange={this.handleChange}
						></textarea>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateProject;
