import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tabler-react/dist/Tabler.css";
import HomePage from "./HomePage.react";


type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
