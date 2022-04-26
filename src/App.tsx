// Imports

import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

// Styles

const containerStyle: CSSProperties = {
	height: `100%`,
	
	display: `flex`,
	flexDirection: `column`,
}

// Main Component

export default function App () {
	return (
		<div style={containerStyle}>
			<Navbar />

			<Outlet />
		</div>
	);
}
