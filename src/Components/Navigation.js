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
		<div className="font-headings text-3xl grid align-middle items-center p-2">
			<Link className='text-6xl p-4 m-4 font-headings font-extrabold' to='/'>
				{message}
			</Link>

			<div className="flex items-center justify-around">
					<Link to='/topics'> Topics </Link>
					<Link to="/about"> About </Link>
			</div>
		</div>
	)
}