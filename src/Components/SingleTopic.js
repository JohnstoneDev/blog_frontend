import { useCallback, useEffect, useState } from 'react';
import { Link ,useParams } from 'react-router-dom'

import { BackButton } from './Home';


export const SingleTopic = () => {
	const { id } = useParams();
 	const [ topic, setTopic ] = useState({});

	const url = `/posts/${id}`;

	const getTopic = useCallback(async () => {
		const response = await fetch(url);
		const topic = await response.json();

	},[url])

	useEffect(() => {

	})

	return (
		<div>
			<BackButton />
		</div>
	)
}