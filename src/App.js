import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WeatherScreen from "./components/screens/WeatherScreen";

const Root = () => {
  return <Redirect to="/weather_app" />;
};

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={Root} path="/" />
        <Route component={WeatherScreen} path="/weather_app" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
