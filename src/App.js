import './App.css'
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListTable from './Pages/ListTable';
import Menu from './Pages/Menu';
import UserComplaints from './Pages/UserComplaints';
import Cart from './Pages/Cart'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={ListTable} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Cart" component={Cart} />
        <Route path ="/UserComplaints" component={UserComplaints} />
      </Switch>
    </Router>
  );
}

export default App;
