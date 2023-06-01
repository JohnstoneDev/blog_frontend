import {
	createContext,
	useEffect,
	useState
} from "react";

import { useNavigate } from "react-router-dom";


import { Stories } from "./Stories";
import { Navigation } from "./Navigation";

export const ApplicationContext = createContext();

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
	const [ stories, setStories ] = useState([]);

	function callBackendStories(){
		fetch('/posts')
		.then(r => r.ok? r.json() : console.log(r))
		.then(d => {
			setStories(d.sort());
		})
		.catch(e => console.log(e.message));
	}

	useEffect(() => {
		callBackendStories();
	},[]);


	return (
		<div className="min-h-screen p-2">
			<ApplicationContext.Provider value={{ stories }}>
				<Navigation />
				<Stories />
			</ApplicationContext.Provider>
		</div>
	)
};