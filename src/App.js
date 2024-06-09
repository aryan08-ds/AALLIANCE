import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Home from "./components/Home";
import Account from "./components/Account";
import Signup from "./components/Signup";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Orders from "./components/Orders";
import OrderDetail from "./components/OrderDetail";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/account" component={Account} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/contact" component={Contactus} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/orders" component={Orders} />
          <Route path="/order/:orderId" component={OrderDetail} />
        </Switch>
      </div>
    </>
  );
}

export default App;
