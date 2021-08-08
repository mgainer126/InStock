import "./App.css";
import InventoryList from "./components/InventoryList/InventoryList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";

function App() {
  return (
    <>
      <h1> Welcome to Instock</h1>
      <WarehouseList />
    </>
  );
}

export default App;
