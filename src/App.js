import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListTable from "./Pages/ListTable";
import Menu from "./Pages/Menu";

import Cart from "./Pages/Cart";
// import MakeOrder from "./Pages/MakeOrder";
import BookTable from "./Pages/BookTable";
import CreateComplaints from "./Pages/CreateComplaints";
import Login from "./Pages/Login";
import popup from './Pages/popup';
import forget from './Pages/forget';

function App() {
  return (
    <Router>
     
      <Switch>
        <Route path exact="/" component={Login} />

        <Route path="/ListTable" exact component={ListTable} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Cart" component={Cart} />
      {/* <Route path="/MakeOrder" component={MakeOrder} />
  */}
        <Route path="/BookTable" component={BookTable} />
        <Route path="/CreateComplaints" component={CreateComplaints} />
        <Route path="/popup" component={popup} />
        <Route path="/forget" component={forget} />
      
      </Switch>
    </Router>
  );
}

export default App;
