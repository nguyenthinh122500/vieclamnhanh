import "./App.css";
import Home from "./pages/Home/Home";
import ListJobs from "./pages/ListJobs/ListJobs";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { UserTemplate } from "./template/UserTemplate/UserTemplate";
import JobDetail from "./pages/JobDetail/JobDetail";
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>

        <UserTemplate path="/" exact Component = {Home} />
        <UserTemplate path="/listjob" exact Component = {ListJobs} />
        <UserTemplate path="/jobdetail" exact Component = {JobDetail} />
      </Switch>
    </Router>
  );
}

export default App;
