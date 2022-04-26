// Imports

import { Fragment } from "react";
import { Link } from "react-router-dom";

import type { CSSProperties } from "react";

// Styles

const flexParent: CSSProperties = {
	height: `100%`,

	display: `flex`,
	flexDirection: `column`,
	justifyContent: `space-between`,
}

const flexItem: CSSProperties = {
	width: `100%`,
	textAlign: `center`,
}

// Main Component

export default function HomePage () {
	// Rendering
	return (
		<Fragment>
			<div style={flexParent}>
				<div style={flexItem}>
					<h1>Howdy</h1>
					<h4>Welcome to the site.</h4>
				</div>

				<div style={flexItem}>
					<Link to="/projects">
						<button type="button" className="btn btn-primary">Projects</button>
					</Link>
				</div>

				<div style={flexItem}>
					<span>Xavier Horn</span>
				</div>
			</div>
		</Fragment>
	);
}
