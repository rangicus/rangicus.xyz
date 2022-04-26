// Imports

import { render } from "react-dom";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import App from "./App";
import Project1 from "./routes/projects/Project1";
import Project2 from "./routes/projects/Project2";

// Main

const root = document.getElementById(`root`);
render(
	(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="Project1" element={<Project1 />} />
					<Route path="Project2" element={<Project2 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	),
	root,
);
