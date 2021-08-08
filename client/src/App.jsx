import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InventoryList from "./components/InventoryList/InventoryList";
import InventoryItemDetails from "./components/InventoryItemDetials/InventoryItemDetials";
import WharehouseDetails from "./components/WarehouseDetials/WarehouseDetails";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<EditWarehouse />
			<Switch>
				{/* <Route exact path="/" component={Warehouses} /> */}
				<Route path="/details" component={WharehouseDetails} />
				<Route path="/edit" component={EditWarehouse} />

				<Route path="/edit/:id" component={EditWarehouse} />
				{/* <Route path="/add" component={AddWarehouse} /> */}

				<Route path="/inventory" component={InventoryList} />
				<Route path="/itemDetails" component={InventoryItemDetails} />
				{/* <Route path="/editItem" component={EditInventory} />
        		<Route path="/addItem" component={AddInventory} /> */}
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
