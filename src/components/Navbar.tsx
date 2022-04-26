// Imports

import { Link } from "react-router-dom";

// Components

function NavLink ({ to, children }: {
	to: string;
	children: string;
}) {
	// Rendering
	return (
		<li className="nav-item">
			<Link className="nav-link" to={to}>
				{children}
			</Link>
		</li>
	);
}

// Main Component

export default function Navbar () {
	// Rendering
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">rangicus</Link>
				
				<ul className="navbar-nav me-auto">
					<NavLink to="/projects">Projects</NavLink>
				</ul>
			</div>
		</nav>
	);
}
