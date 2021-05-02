import './App.css'
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListTable from './Pages/ListTable';
import PendingOrder from './Pages/PendingOrder';
import DoneOrder from './Pages/DoneOrder';
import UserComplaints from './Pages/UserComplaints'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={ListTable} />
        <Route path="/PendingOrder" component={PendingOrder} />
        <Route path="/DoneOrder" component={DoneOrder} />
        <Route path="/UserComplaints" component={UserComplaints} />
      </Switch>
    </Router>
  );
}

export default App;
