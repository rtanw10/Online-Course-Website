import './App.css';
import NavBar from "./NavigationBar/NavBar";
import Home from "./HomePage/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="homePage">
            <Home />
        </div>
    </div>
  );
}

export default App;
