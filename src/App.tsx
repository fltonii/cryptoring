import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Dashboard } from "./pages";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default App;
