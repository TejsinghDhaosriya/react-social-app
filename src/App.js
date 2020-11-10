
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import Contact from './components/pages/Contact';
import About from './components/pages/About';
function App() {
  return (
    <div className="App">
       <Home/>
       <About/>
       <Contact/>
    </div>
  );
}

export default App; 
