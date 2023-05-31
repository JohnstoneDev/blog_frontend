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
			<div className="text-4xl text-left font-headings p-4 m-4">
				<Link to="/">Home </Link>
			</div>

			<div>
				<TopicsContext.Provider value={{ topics }}>
					<TopicsList />
				</TopicsContext.Provider>
			</div>
		</div>
	)
}