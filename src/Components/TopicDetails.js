import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";

import { convertDate } from "./Home";

function PostComponent({ post }){
	const { id, title, created_at, story_summary } = post;
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
								<Link
									to={`/story/${id}`}
									className='hover:text-blue-800 font-headings'
									>
									View Full Story
								</Link>
						</section>

					</div>
				</div>
	)
}



export function TopicDetails({ details }){
	const { posts  } = details;

	return (
		<div className="flex flex-col gap-4">
				<div>
					{
						posts.map((post) => {
							return <PostComponent key={post.id} post={post} />
						})
					}
				</div>
		</div>
	)
}
