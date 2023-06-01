import { Link } from 'react-router-dom';

export const Navigation = () => {

	return (
		<div className="font-headings text-3xl grid align-middle items-center p-2">
			<Link className='text-6xl p-4 m-4 font-headings font-extrabold' to='/'>
				THE MERMAID TARVERN 
			</Link>

			<div className="flex items-center justify-around">
					<Link to='/topics'> Topics </Link>
					<Link to="/about"> About </Link>
			</div>
		</div>
	)
}