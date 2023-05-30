import { createContext, useEffect, useState } from "react"

import { Stories } from "./Stories";
import { Navigation } from "./Navigation";

export const StoriesContext = createContext();

export function Home(){
	const [ stories, setStories ] = useState([]);

	function callBackendStories(){
		fetch('/posts')
		.then(r => r.ok? r.json() : console.log(r))
		.then(d => {
			setStories(d);
		})
		.catch(e => console.log(e.message));
	}

	useEffect(() => {
		callBackendStories();
	},[]);


	return (
		<div className="min-h-screen p-2">
			<StoriesContext.Provider value={{ stories }}>
				<Navigation />
				<Stories />
			</StoriesContext.Provider>
		</div>
	)
};