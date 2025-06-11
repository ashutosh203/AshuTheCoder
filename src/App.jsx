import Header from "./Header/Header";
import './App.css';
import MainProjectPage from "./Projects/MainProjectPage";
import ParticlesComponent from "./ParticlesBackground/ParticlesBackground";
function App() {
 
  return (
    <>
      <div className="App">
        <ParticlesComponent />
        <Header />
      </div>
    </>
  );
}

export default App;
