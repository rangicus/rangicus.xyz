// Imports

import React from "react";
import { Outlet, Link } from "react-router-dom";

// Main Component

export default function App () {
	return (
		<div>
			<nav
				style={{
					borderBottom: `solid 1px`,
					paddingBottom: `1rem`,
				}}
			>
				<Link to="/">Home</Link>
				<Link to="/Project1">Project1</Link>
				<Link to="/Project2">Project2</Link>
			</nav>

			<Outlet />
		</div>
	);
}
