import React, {useEffect} from 'react'
import FilterAndAddMovie from './components/movie/FilterAndAddMovie';

function App() {
  useEffect(() => {
    document.title = "React Hooks Checkpoint"
    return () => {
      // cleanup
    }
  }, [])
  return (
    <div className="container">
      <FilterAndAddMovie />
    </div>
  );
}

export default App;
