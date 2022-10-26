import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
	const { id } = useParams();
	console.log(useParams());
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
						dolorem debitis esse perspiciatis quis, inventore aspernatur
						doloribus modi perferendis et ratione voluptatibus ipsa corrupti
						minus blanditiis! Itaque, delectus odio! Exercitationem.
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div className="">Posted by abdallah</div>
					<div className="">october</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
