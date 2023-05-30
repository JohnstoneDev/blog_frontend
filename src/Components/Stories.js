import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { StoriesContext } from "./Home";

const DisplayStory = ({ id, title, story_summary, created_at, topic }) => {
	const written_date = new Date(created_at).toUTCString();

	return (
		<div
			className
			='flex flex-col gap-4 justify-center align-middle m-2 p-2'>
			<section className='flex gap-4'>
				<h2 className='font-headings mb-2'>{title}</h2>
				<h4>Published : {written_date}</h4>
			</section>

			<section>
				<h4>{story_summary}</h4>
				<h5 className='font-semibold'>{topic.name}</h5>
			</section>

			<Link to={`/story/${id}`}>
				View Full Story
			</Link>
		</div>
	)
}


export function Stories(){
	const context = useContext(StoriesContext);

	return (
		<div 
			className
			='grid grid-cols-2 gap-8 text-left items-center align-middle justify-center w-full
			m-2 p-2'>
			{
				context.stories.map((story) => {
					return <DisplayStory key={story.id} {...story} />
				})
			}
		</div>
	)
}


// {/* <DisplayStory key={story.id} {...story} /> */}