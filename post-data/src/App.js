import logo from "./logo.svg";
import "./App.css";
import PostLandingPage from "./components/post/PostLandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import PotectedRouter from "./components/PotectedRouter";
import PostList from "./components/post/PostList";
import { useEffect, useState } from "react";
import LandingPage from "./container/LandingPage";

function App() {
  const [auth, setAuth] = useState(false);

  const handleCLick = () => {
    const item = localStorage.getItem("auth");

    console.log(item);
  };
  const handleCLickpost = () => {
    const item = JSON.parse(localStorage.getItem("auth"));
    item.postAuth = true;
    console.log(item);
  };
  const handleRouterPostList = () => {
    setAuth(true);
    console.log("rajesh");
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/posts"
            render={() => (
              <PostLandingPage handleSubmitRoute={handleRouterPostList} />
            )}
          />

          <PotectedRouter
            exact
            path="/postlist"
            component={PostList}
            auth="postAuth"
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
