import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/home";
import Movie from "../views/movie";

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
