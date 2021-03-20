
import './App.css';
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from './auth/AuthState'
import Home from './components/Home'
import Register from './components/Register'
import Navbar from './components/NavBar'
import ChartBar from './components/ChartBar'
import PieChart from './components/PieChart';

function App() {
  return (
    <AuthState>
      <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/chartbar" component={ChartBar} />
              <Route exact path="/piechart" component={PieChart} />
            </Switch>
          </Fragment>
        </Router>
    </AuthState>
  );
}

export default App;
