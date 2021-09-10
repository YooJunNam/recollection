import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Map from "./Map";
import CalendarMode from "./pages/calendar/CalendarMode";
import { useEffect } from "react";
import "antd/dist/antd.dark.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/Home" component={Home}></Route>
      <Route path="/Map" component={Map}></Route>
      <Route path="/Calendar" component={CalendarMode} />
    </div>
  );
}

export default withRouter(App);
