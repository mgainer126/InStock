import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryList from "../src/pages/InventoryList/InventoryList";
import ItemDetail from "../src/pages/ItemDetail/ItemDetail";
import WarehouseDetail from "../src/pages/WarehouseDetail/WarehouseDetail";
import AddInventoryItem from "../src/pages/AddInventoryItem/AddInventoryItem";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Warehouses} /> */}
        <Route path="/details/:id" component={WarehouseDetail} />
        {/* <Route path="/edit" component={EditWarehouse} />
        <Route path="/add" component={AddWarehouse} /> */}

        <Route path="/inventory" component={InventoryList} />
        <Route path="/itemDetails/:id" component={ItemDetail} />
        {/* <Route path="/editItem" component={EditInventory} /> */}
        <Route path="/addItem" component={AddInventoryItem} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
