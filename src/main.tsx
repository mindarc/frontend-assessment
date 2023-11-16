import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./pages/App.tsx";
import { ExerciseOne } from "./pages/ExerciseOne.tsx";
import { ExerciseTwo } from "./pages/ExerciseTwo.tsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/exercise-one",
		element: <ExerciseOne />,
	},
	{
		path: "/exercise-two",
		element: <ExerciseTwo />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
