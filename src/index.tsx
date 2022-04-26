// Imports

import { render } from "react-dom";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import App from "./App";
import HomePage from "./routes/HomePage";
import ProjectPage from "./routes/projects/ProjectPage";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// Main

const root = document.getElementById(`root`);
render(
	(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	),
	root,
);
