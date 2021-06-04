import './App.css'
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListTable from './Pages/ListTable';
import Menu from './Pages/Menu';
import UserComplaints from './Pages/UserComplaints';
import Cart from './Pages/Cart';
import MakeOrder from './Pages/MakeOrder';
import SendOrder from './Pages/SendOrder';
import TableBook from './Pages/TableBook';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={ListTable} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Cart" component={Cart} />
        <Route path="/MakeOrder" component={MakeOrder} />
        <Route path ="/UserComplaints" component={UserComplaints} />
        <Route path ="/ SendOrder" component={ SendOrder} />
        <Route path ="/ TableBook" component={ TableBook} />
      </Switch>
    </Router>
  );
}

export default App;
