import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/create">New Project</NavLink>
			</li>
			<li>
				<NavLink to="/signout">Log Out</NavLink>
			</li>
			<li>
				<NavLink to="/" className="btn btn-floating pink lighten-1">
					aa
				</NavLink>
			</li>
		</ul>
	);
};

export default SignedInLinks;
