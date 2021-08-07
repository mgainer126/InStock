import "../ItemDetail/ItemDetail.scss";
import React, { Component } from "react";
import InventoryItemDetails from "../../components/InventoryItemDetials/InventoryItemDetials";
import axios from "axios";
export default class ItemDetail extends Component {
  state = {
    inventoryItem: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios
        .get(`http://localhost:8081/inventories/`)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  render() {
    console.log(this.state.inventoryItem);
    return (
      <>
        <InventoryItemDetails />
      </>
    );
  }
}
