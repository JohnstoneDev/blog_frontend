import { Routes, Route } from "react-router-dom";
import React from "react";

import { Home } from './Home';
import { SingleStory } from "./SingleStory";
import { Topics } from "./Topics";
import { SingleTopic } from "./SingleTopic";


export function Paths()
{
	return (
		<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/story/:id' element={<SingleStory/>} />
				<Route path='/topics' element={<Topics />} />
				<Route path='/topics/:id' element={<SingleTopic />} />
		</Routes>
	)
}