import { Routes, Route } from "react-router-dom";

import { Home } from './Home';
import { SingleStory } from "./SingleStrory";
import { Topics } from "./Topics";


export function Paths()
{
	return (
		<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/story/:id' element={<SingleStory/>} />
				<Route path='/topics' element={<Topics />} />
		</Routes>
	)
}