import {
	useContext,
	useState,
 } from 'react';

import { TopicsContext } from './Topics';

function TopicInfo({ topic, clickFunction }){
	const { id, name } = topic;

	return (
		<div className='text-right'>
				<button onClick={() => clickFunction(id)}>
					{ name }
				</button>
		</div>
	)
}

function TopicDetails({ details }){
	const { name, posts  } = details;

	return (
		<div>
				<h2 className='font-headings'>{name}</h2>
				<div>
					{
						posts.map((post) => {
							return (
							<div key={post.id} className='flex flex-col gap-4 '>
								<div className='p-2 shadow-lg'>
									{post.story_summary}
								</div>
								<div className='p-2 shadow-lg'>
									{post.story_summary}
								</div>
							</div>
							)
						})
					}
				</div>
		</div>
	)
}


export function TopicsList(){
	const context = useContext(TopicsContext);

	const [ details, setDetails ] = useState({
		name : '',
		posts : []
	});

	const clickFunction = (id) => {
		const topic = context.topics.find(topic => topic.id === id);
		setDetails(topic);
	}

	return (
		<div className='flex flex-col items-center gap-8 p-2 m-2 text-left align-middle'>
			<div className='flex gap-4 align-middle items-center justify-center'>
				{ context.topics.map((topic) => {
					return <TopicInfo key={topic.id} topic={topic} clickFunction={clickFunction}/>
				})}
			</div>

			{
					details.id === undefined ?
					<div className='font-headings'> Click on a topic to show its details </div> :
					<TopicDetails details={details}/>
			}
		</div>
	)
}