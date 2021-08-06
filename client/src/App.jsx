import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Warehouses} />
        <Route path="/details" component={WarehouseDetails} />
        <Route path="/edit" component={EditWarehouse} />
        <Route path="/add" component={AddWarehouse} />

        <Route exact path="/inventory" component={Inventory} />
        <Route path="/itemDetails" component={InventoryDetails} />
        <Route path="/editItem" component={EditInventory} />
        <Route path="/addItem" component={AddInventory} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
