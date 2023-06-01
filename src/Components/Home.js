import { useNavigate } from "react-router-dom";


import { Stories } from "./Stories";
import { Navigation } from "./Navigation";

export const convertDate = (date_input) => {
	return new Date(date_input).toLocaleString();
}

export const BackButton = () => {
	const navigate = useNavigate();

	return (
		<div className="text-4xl text-left font-headings p-4 m-4">
				<button onClick={() => navigate(-1)}>
						Back
				</button>
		</div>
	)
}

export function Home(){

	return (
		<div className="min-h-screen p-2">
				<Navigation />
				<Stories />
		</div>
	)
};