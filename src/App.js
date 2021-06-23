import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListTable from "./Pages/ListTable";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
 import Reservation from "./Pages/Reservation";
import BookTable from "./Pages/BookTable";
import CreateComplaints from "./Pages/CreateComplaints";
import Login from "./Pages/Login";
import SuperAdmin from './Pages/SuperAdmin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path exact="/" component={Login} />

        <Route path="/ListTable" exact component={ListTable} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Reservation" component={Reservation} />     
        <Route path="/BookTable" component={BookTable} />
        <Route path="/CreateComplaints" component={CreateComplaints} />
        <Route path="/SuperAdmin" component={SuperAdmin} />
      </Switch>
    </Router>
  );
}

export default App;
