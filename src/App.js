import './App.css';
import AllTilesView from './AllTilesView';
import { fetchImages, baseURL } from './api';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.svgrepo.com/show/85954/planet-saturn.svg" className="App-logo" alt="logo" />
          <h1>Spacestagram</h1>
      </header>
      <main className="App-body-container">
        <AllTilesView getImages={fetchImages} baseURL={baseURL} />
      </main>
    </div>
  );
}

export default App;
