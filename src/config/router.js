import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/home";

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;