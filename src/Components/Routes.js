import { Routes, Route } from "react-router-dom";

import { Home } from './Home';
import { SingleStory } from "./SingleStrory";


export function Paths()
{
	return (
		<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/story/:id' element={<SingleStory/>} />
		</Routes>
	)
}