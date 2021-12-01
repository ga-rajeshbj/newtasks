import "./App.css";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PotectedRouter from "./components/PotectedRouter";
import UserList from "./components/UserList";

import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />

          <PotectedRouter exact path="/userlist" component={UserList} />
          <Route exact path="/createUser" render={() => <CreateUser />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
