import "../ItemDetail/ItemDetail.scss";
import React, { Component } from "react";
import InventoryItemDetails from "../../components/InventoryItemDetials/InventoryItemDetials";
import axios from "axios";

export default class ItemDetail extends Component {
  state = {
    inventoryItem: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8081/inventories/`)
      .then((res) => {
        let array = res.data;
        let foundItem = array.filter(
          (id) => id.id === this.props.match.params.id
        );

        this.setState({
          inventoryItem: foundItem[0],
        });
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        {this.state.inventoryItem && (
          <InventoryItemDetails foundItem={this.state.inventoryItem} />
        )}
      </>
    );
  }
}
