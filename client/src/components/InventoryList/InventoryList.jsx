import axios from "axios";
import React, { Component } from "react";
import { API_URL } from "../../api/config";
import Inventory from "../../pages/Inventory";
import "../InventoryList/InventoryList.scss";

// function InventoryList() {
export default class InventoryList extends Component {
  state = {
    inventoryList: null,
  };

  componentDidMount() {
    axios.get(`${API_URL}/inventories`).then((res) => {
      console.log(res.data);
      this.setState({
        inventoryList: res.data,
      });
    });
  }

  render() {
    console.log(this.state.inventoryList);
    return (
      <div>
        {this.state.inventoryList && this.state.inventoryList && (
          <div>
            <section className="head">
              <h3 className="head__title">Inventory</h3>
              <form className="head__form">
                <label className="head__search" htmlFor="search"></label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  value="Search ... "
                  className="head__search-box"
                ></input>
                <button className="head__button">+ Add New Item</button>
              </form>
            </section>
            <ul className="filter">
              <li className="filter__item">INVENTORY ITEM</li>
              <li className="filter__category">CATEGORY</li>
              <li className="filter__status">STATUS</li>
              <li className="filter__qty">QTY</li>
              <li className="filter__warehouse">WAREHOUSE</li>
              <li className="filter__actions">ACTIONS</li>
            </ul>
            <div className="tablet-header">
              <p>INVENTORY ITEM</p>
              <p>CATEGORY</p>
              <p>STATUS</p>
              <p>QTY</p>
              <p>WAREHOUSE</p>
              <p>ACTIONS</p>
            </div>
            <Inventory inventoryarr={this.state.inventoryList} />
            {/* INVENTORY ITEMS */}
          </div>
        )}
      </div>
    );
  }
}