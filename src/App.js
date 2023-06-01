import {
  createContext,
  useCallback,
  useEffect,
  useState
 } from 'react';

import './App.css';
import { Paths }  from '../src/Components/Routes';

export const GlobalContext = createContext();

function Loading(){
  return (
    <div className='m-4 p-4'>
      <h1 className='font-headings text-8xl animate-pulse'> Loading Data ... </h1>
    </div>
  )
}


function App() {
  const [ stories, setStories ] = useState();
  const [ topics, setTopics ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const fetchSomeData = useCallback(async (url, stateFunction) => {
    const response = await fetch(url)
    const data = await response.json();
    stateFunction(data);
  },[])

  useEffect(() => {
      fetchSomeData('/posts', setStories);
      fetchSomeData('/topics', setTopics);

      const loadingTimeout = setTimeout(() => {
        setLoading(false)
      },3000);

      return () => clearTimeout(loadingTimeout);
  },[fetchSomeData])

  return (
    <div
      className
      ="text-center text-2xl bg-[#1f1a1a] font-content text-[#cecece] min-h-screen
      min-w-screen bg-cover leading-loose antialiased tracking-wide overflow-y-hidden">
      <div>
        <GlobalContext.Provider value={{ topics, stories }}>
          {
            loading ? <Loading /> : <Paths />
          }
        </GlobalContext.Provider>
      </div>
    </div>
  );
}

export default App;
