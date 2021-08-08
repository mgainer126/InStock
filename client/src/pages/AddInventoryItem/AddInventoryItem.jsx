import FormAddNewInventory from "../../components/FormAddNewInvetory/FormAddNewInvetory";
import React, { Component } from "react";
import axios from "axios";

export default class InventoryList extends Component {
  state = {
    inventoryItem: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newInventoryItem = [
      {
        itemName: event.target[0].value,
        itemDescription: event.target[1].value,
        category: event.target[2].value,
        inStock: event.target[3].value,
        outOfStock: event.target[4].value,
        quantity: event.target[5].value,
        warehouse: event.target[6].value,
      },
    ];
    {
      this.createNewInventoryItem(newInventoryItem);
    }
  };

  createNewInventoryItem = (obj) => {
    axios
      .post("http://localhost:8081/inventories", obj)
      .then((response) => {
        console.log(response);
        this.setState({ inventoryItem: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <FormAddNewInventory
        clickHandle={this.handleSubmit}
        itemName={this.state.itemName}
        itemDescription={this.state.itemDescription}
      />
    );
  }
}
