import {
	useContext,
	useState,
 } from 'react';

import { TopicDetails } from './TopicDetails';
import { GlobalContext } from '../App';


function TopicInfo({ topic, clickFunction  }){
	const { id, name } = topic;

	return (
		<div className='text-right font-headings'>
				<button
					className='focus:text-green-600 focus:underline text-xl'
					onClick={() => clickFunction(id)}>
					{ name.toUpperCase() }
				</button>
		</div>
	)
}

export function TopicsList(){
	const context = useContext(GlobalContext);

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
					return (
					<TopicInfo key={topic.id} topic={topic} clickFunction={clickFunction}/>
					)
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