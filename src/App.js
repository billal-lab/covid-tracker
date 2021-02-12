import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './Components/About';
import Cantact from "./Components/Cantact";
import Navbar from './Components/Navbar';
import Countries from  './Components/Countries'
import CountryDetails from './Components/CountryDetails'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
              <Route path="/Countries"  exact component={Countries}/>
          </Switch>
          <Switch>
              <Route path="/Countries/:id" exact component={CountryDetails}/>
          </Switch>
          <Switch>
            <Route path="/About" exact component={About}/>
          </Switch>
          <Switch>
            <Route path="/Cantact" exact component={Cantact}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
