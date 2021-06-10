import './App.css'
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListTable from './Pages/ListTable';
import Menu from './Pages/Menu';
import UserComplaints from './Pages/UserComplaints';
import Cart from './Pages/Cart';
import MakeOrder from './Pages/MakeOrder';
import BookTable from './Pages/BookTable';
import CreateComplaints from './Pages/CreateComplaints';
import SendItem from './Pages/SendItem';
import Login from './Pages/Login';
import send from './Pages/send';



function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
      <Route path exact="/" component={Login} />
        <Route path="/ListTable" exact component={ListTable} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Cart" component={Cart} />
        <Route path="/MakeOrder" component={MakeOrder} />
        <Route path ="/UserComplaints" component={UserComplaints} />
        <Route path="/BookTable" component={BookTable} />
        <Route path="/CreateComplaints" component={CreateComplaints} />
        <Route path="/SendItem" component={SendItem} />
        <Route path="/send" component={send} />
        
 
      </Switch>
    </Router>
  );
}

export default App;
