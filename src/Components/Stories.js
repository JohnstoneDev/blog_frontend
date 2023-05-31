import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { FcCalendar } from 'react-icons/fc';

import { StoriesContext } from "./Home";

const DisplayStory = ({ id, title, story_summary, created_at, topic }) => {
	const written_date = new Date(created_at).toLocaleDateString();

	return (
		<div>
					<div
						className
						='flex flex-col gap-4 justify-end align-middle
						 rounded cursor-pointer shadow-lg shadow-neutral-700 p-4 w-full box-border
						 hover:shadow-2xl hover:shadow-neutral-700'>

						<section className='flex gap-4 w-full font-headings space-x-4 justify-between'>
							<h2 className='font-headings text-4xl mb-2'>{title}</h2>
							<h4 className='underline text-lg flex space-x-4 gap-4 items-center justify-end'> 
								<FcCalendar />{written_date}
							</h4>
						</section>

						<section className='flex flex-col gap-4'>
							<h4>{story_summary}</h4>
							<h5 className='font-bold underline tracking-widest text-blue-500 font-headings'>{topic.name}</h5>
								<Link
									to={`/story/${id}`}
									className='hover:text-blue-500'
									>
									View Full Story
								</Link>
						</section>

					</div>
				</div>
	)
}


export function Stories(){
	const context = useContext(StoriesContext);

	return (
		<div>
			<div
				className
				='grid gap-8 text-left items-center align-middle justify-center w-full
				m-4 p-2'>
				{
					context.stories.map((story) => {
						return <DisplayStory key={story.id} {...story} />
					})
				}
			</div>
	</div>
	)
}

