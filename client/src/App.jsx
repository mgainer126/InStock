<<<<<<< HEAD
// import "./App.css";
import InventoryList from "./components/InventoryList/InventoryList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";

function App() {
  return (
    <>
      <h1> Welcome to Instock</h1>
      {/* <WarehouseList /> */}
      <EditInventoryItem />
    </>
=======
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryList from "./components/InventoryList/InventoryList";
import InventoryItemDetails from "./components/InventoryItemDetials/InventoryItemDetials";
import WharehouseDetails from "./components/WarehouseDetials/WarehouseDetails";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Warehouses} /> */}
        <Route path="/details" component={WharehouseDetails} />
        {/* <Route path="/edit" component={EditWarehouse} />
        <Route path="/add" component={AddWarehouse} /> */}

        <Route path="/inventory" component={InventoryList} />
        <Route path="/itemDetails" component={InventoryItemDetails} />
        {/* <Route path="/editItem" component={EditInventory} />
        <Route path="/addItem" component={AddInventory} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
>>>>>>> development
  );
}

export default App;
