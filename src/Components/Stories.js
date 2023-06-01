import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { FcCalendar } from 'react-icons/fc';

import { convertDate } from "./Home";
import { GlobalContext } from '../App';

export const DisplayStory = ({ id, title, story_summary, created_at, topic }) => {
	const written_date = convertDate(created_at);

	return (
		<div>
					<div
						className
						='flex flex-col gap-4 justify-end align-middle
						 rounded cursor-pointer shadow-lg shadow-neutral-700 p-4 w-full box-border
						 hover:shadow-2xl hover:shadow-neutral-700 bg-[#cecece] text-[#1f1a1a]'>

						<section className='flex gap-4 w-full font-headings space-x-4 justify-between'>
							<h2 className='font-headings text-4xl mb-2'>{title}</h2>
							<h4 className='underline text-lg flex space-x-4 gap-4 items-center justify-end'>
								<FcCalendar />{written_date}
							</h4>
						</section>

						<section className='flex flex-col gap-4'>
							<h4>{story_summary}</h4>
						<div className='grid grid-cols-2 justify-around items-center'>
							<Link
								to={`/topics/`}
								className
								='font-bold underline tracking-widest text-blue-500 font-headings'>
									{topic.name}
							</Link>
								<Link
									to={`/story/${id}`}
									className='hover:text-blue-500 rounded bg-transparent'
									>
									View Full Story
								</Link>
						</div>
						</section>

					</div>
				</div>
	)
}


export function Stories(){
	const context = useContext(GlobalContext);

	function StoryList(){
		return (
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
		)
	}

	return (
		<div className='flex flex-col'>
			<h2 className='font-headings underline'> Recent Stories</h2>
				<StoryList />
	</div>
	)
}

