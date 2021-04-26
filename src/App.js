import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserOrder from "./Pages/UserOrder";
import UserComplaints from "./Pages/UserComplaints";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={UserOrder} />
        <Route path="/UserComplaints" component={UserComplaints} />
      </Switch>
    </Router>
  );
}

export default App;
