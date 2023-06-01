import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { GlobalContext } from "../App";
import { Stories } from "./Stories";
import { Navigation } from "./Navigation";
import { NoDisplayData } from "./NoDisplay";

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
	const context = useContext(GlobalContext);

	const stories = context.stories;

	return (
		<div className="min-h-screen p-2">
			{
				stories.length > 0 ?
			<div>
				<Navigation />
				<Stories />
			</div>
			:
			<NoDisplayData />
			}
		</div>
	)
};