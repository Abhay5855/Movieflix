
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

<BrowserRouter>

<Navbar />


<Routes>
  {/* <Route exact path="/" element={<Signup />} />

  <Route path="/home" element={<Container />} />

  <Route path="/watch-later" element={<WatchLater />} />

  <Route path="/search" element={<SearchPage/>} movieId={movieId} setMovieId={setMovieId}/> */}
</Routes>
</BrowserRouter>

      
    
    </div>
  );
}

export default App;
