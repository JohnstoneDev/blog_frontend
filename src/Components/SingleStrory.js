import { Link, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";

const DisplaySingleStory = ({ post }) => {
	const { title, content, story_summary, topic, created_at } = post;
	const written_date = new Date(created_at).toUTCString();

	return (
		<div>
			<h1>{title}</h1>
			<span>{written_date}</span>
			<p>{story_summary}</p>
			<p>{content}</p>
			<p>{topic.name}</p>
		</div>
	)
}

export const SingleStory = () => {
	const { id } = useParams();
	const [ story, setStory ] = useState({
		title : '',
		content : '',
		story_summary : '',
		created_at : '',
		topic : {}
	});

	const url = `/posts/${id}`

	const getStory = useCallback(async () => {
		const response = await fetch(url);
		const story = await response.json();

		setStory(story);
	},[url])

	useEffect(() => {
		getStory();
	},[url, getStory])


	return (
		<div>
			<button>
				<Link to="/">
					Home
				</Link>
			</button>

			<DisplaySingleStory post={story} />
		</div>
	)
}