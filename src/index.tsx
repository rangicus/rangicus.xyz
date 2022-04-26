// Imports

import { createRoot } from "react-dom/client";

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

const container = document.getElementById(`app`) as HTMLElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/" element={<HomePage />} />

				<Route path="/projects">
					<Route index element={<ProjectPage />} />
				</Route>
			</Route>
		</Routes>
	</BrowserRouter>
);
