import WarehouseDetails from "../../components/WarehouseDetials/WarehouseDetails";
import InventorySelectedWarehouse from "../../components/InventorySelectedWarehouse/InventorySelectedWarehouse";
import React, { Component } from "react";
import "../WarehouseDetail/WarehouseDetail.scss";
import axios from "axios";

export default class WarehouseDetail extends Component {
  state = {
    selectedWarehouse: null,
    inventoryByWarehouse: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8081/warehouses/`)
      .then((res) => {
        let array = res.data;
        let foundWarehouse = array.filter(
          (id) => id.id === this.props.match.params.id
        );
        this.setState({
          selectedWarehouse: foundWarehouse[0],
        });
        return res.data;
      })
      .then((res) => {
        axios.get(`http://localhost:8081/inventories/`).then((res) => {
          let warehouseList = res.data;
          let inventoryByWarehouse = warehouseList.filter(
            (id) => id.warehouseID === this.props.match.params.id
          );
          this.setState({
            inventoryByWarehouse: inventoryByWarehouse,
          });
          console.log(inventoryByWarehouse);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <>
        {this.state.selectedWarehouse && this.state.inventoryByWarehouse && (
          <>
            <div className="inventory">
              <WarehouseDetails
                selectedWarehouse={this.state.selectedWarehouse}
              />

              <div className="inventory__filter">
                <h3>INVETORY ITEM</h3>
                <h3>CATEGORY</h3>
                <h3>STATUS</h3>
                <h3>QUANTITY</h3>
                <h3>ACTIONS</h3>
              </div>

              <InventorySelectedWarehouse
                inventoryByWarehouse={this.state.inventoryByWarehouse}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
