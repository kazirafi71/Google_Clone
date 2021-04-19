import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
