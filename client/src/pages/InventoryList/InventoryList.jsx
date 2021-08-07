import "./InventoryList.scss";
import Inventory from "../../components/Inventory/Inventory";
import InventoryHeadSort from "../../components/InventoryHeadSort/InventoryHeadSort";
import React, { Component } from "react";
import axios from "axios";

// function InventoryList() {
export default class InventoryList extends Component {
  state = {
    inventoryList: null,
    clickInfo: null,
  };

  componentDidMount() {
    axios.get("http://localhost:8081/warehouses").then((res) => {
      console.log(res.data);
      this.setState({
        inventoryList: res.data,
      });
    });
  }

  clickItem = (click) => {
    this.setState({
      clickInfo: click,
    });
    console.log(click);
  };

  render() {
    console.log(this.state.inventoryList);
    return (
      <div>
        {this.state.inventoryList && this.state.inventoryList && (
          <div>
            <InventoryHeadSort />
            <Inventory
              inventoryarr={this.state.inventoryList}
              clickhandle={this.clickItem}
            />
          </div>
        )}
      </div>
    );
  }
}
