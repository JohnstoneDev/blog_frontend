import { Routes, Route } from "react-router-dom";

import { Home } from './Home';


export function Paths()
{
	return (
		<Routes>
				<Route path='/' element={<Home />} />
		</Routes>
	)
}