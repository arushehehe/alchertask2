import Navbar from './navigation.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home.js';
import Movie_details from './movie_details.js';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/live'>

          </Route>
          <Route path='/demand'>

          </Route>
          <Route path='/discover'>

          </Route>
          <Route path='/movie/details'>
          <Movie_details />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
