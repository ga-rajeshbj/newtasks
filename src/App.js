import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import PotectedRouter from "./components/PotectedRouter";
import UserList from "./components/UserList";
import { useState } from "react";
import CreateUser from "./components/CreateUser";

function App() {
  const [auth, setAuth] = useState(false);

  const handleRouterUserList = () => {
    setAuth(true);
    console.log("rajesh");
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage handleSubmitRoute={handleRouterUserList} />
            )}
          />

          <PotectedRouter
            exact
            path="/userlist"
            component={UserList}
            isAuth={auth}
          />
          <Route exact path="/createUser" render={() => <CreateUser />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
