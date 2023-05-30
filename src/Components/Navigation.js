import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {
	const [ message, setMessage ] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(r => r.json())
    .then(d => setMessage(d.message))
    .catch(e => console.log(e.message))
  },[])

	return (
		<div>
			<Link className='text-4xl p-2 mb-2 font-headings' to='/'>
				{message}
			</Link>
		</div>
	)
}