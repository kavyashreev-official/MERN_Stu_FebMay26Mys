import './App.css'
import CitySelector from './components/CitySelector';
import MovieSearch from './components/MovieSearch';

function App() {

    return (
        // Component Composition
        <>
            <CitySelector />
            <MovieSearch />
        </>
    );
}

export default App