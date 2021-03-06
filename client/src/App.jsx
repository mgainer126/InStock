import ItemDetail from "../src/pages/ItemDetail/ItemDetail";
import WarehouseDetail from "../src/pages/WarehouseDetail/WarehouseDetail";
import AddInventoryItem from "../src/pages/AddInventoryItem/AddInventoryItem";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import Header from "../src/components/Header/Header";
import InventoryList from "../src/components/InventoryList/InventoryList";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={WarehouseList} />
        <Route path="/details/:id" component={WarehouseDetail} />
        {/* <Route path="/details" component={WharehouseDetails} /> */}
        <Route path="/edit" component={EditWarehouse} />
        <Route path="/edit/:id" component={EditWarehouse} />

        {/* <Route path="/add" component={AddWarehouse} /> */}

        <Route path="/inventory" component={InventoryList} />
        <Route path="/itemDetails/:id" component={ItemDetail} />
        {/* <Route path="/itemDetails" component={InventoryItemDetails} /> */}
        {/* <Route path="/editItem" component={EditInventory} /> */}
        <Route path="/addItem" component={AddInventoryItem} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
