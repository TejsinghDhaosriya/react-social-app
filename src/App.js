
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import NotFoundPage from './components/pages/NotFoundPage';
import AddUser from './components/users/AddUser';
function App() {
  return (
    <Router>
   <div className="App">
       <Navbar/>
       <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/users/add" component={AddUser}></Route>
      <Route component={NotFoundPage}></Route>
       </Switch>
       
    </div>
  </Router>    

  );
}

export default App; 
