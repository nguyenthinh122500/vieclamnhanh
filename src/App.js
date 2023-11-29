import "./App.css";
import Home from "./pages/Home/Home";
import ListJobs from "./pages/ListJobs/ListJobs";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { UserTemplate } from "./template/UserTemplate/UserTemplate";
import JobDetail from "./pages/JobDetail/JobDetail";
import { AdminTemplate } from "./template/AdminTemplate/AdminTemplate";
import Admin from "./pages/Admin/Admin";
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserTemplate path="/listjob" exact Component = {ListJobs} />
        <UserTemplate path="/jobdetail" exact Component = {JobDetail} />
        <AdminTemplate path="/admin" exact Component = {Admin} />

        <UserTemplate path="/" exact Component = {Home} />
      </Switch>
    </Router>
  );
}

export default App;
