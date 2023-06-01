import { Link } from "react-router-dom";

import { TopicsList } from "./TopicsList";

export function Topics(){
	return (
		<div>
			<div className="text-4xl text-left font-headings p-4 m-4">
				<Link to="/">Home </Link>
			</div>

			<div>
					<TopicsList />
			</div>
		</div>
	)
}