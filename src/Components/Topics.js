import {
	useState,
	useEffect,
	createContext
} from "react";

import { Link } from "react-router-dom";
import { TopicsList } from "./TopicsList";


export const TopicsContext = createContext();

export function Topics()
{
	const [ topics, setTopics ] = useState([]);

	function fetchTopics(){
		fetch('/topics')
		.then(r => r.ok? r.json() : console.log(r))
		.then(d => setTopics(d))
		.catch(e => console.log(e))
	}

	useEffect(() => {
		fetchTopics();
	},[])

	return (
		<div>
			<div className="flex justify-around align-middle text-3xl items-center font-headings p-2 m-2">
				<Link to="/">Home </Link>
				<Link to="/">Stories</Link>
			</div>

			<div>
				<TopicsContext.Provider value={{ topics }}>
					<TopicsList />
				</TopicsContext.Provider>
			</div>
		</div>
	)
}