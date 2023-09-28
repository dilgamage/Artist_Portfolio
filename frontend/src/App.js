import './App.css';
import ArtistPortfolio from './Components/ArtistPortfolio';
import EventCalander from './Components/EventCalander';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/> 
        <BrowserRouter> 
        <Routes>

        <Route path = "/add" element = {<EventCalander/>}></Route>
        <Route path = "/all" element = {<ArtistPortfolio/>}></Route>
  
        </Routes>
        </BrowserRouter>  
      
    </div>
  );
}

export default App;
