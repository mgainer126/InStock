import scroll from "../../assets/Icons/sort-24px.svg";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import axios from "axios";
import React, { Component } from "react";
import Warehouses from "./Warehouses";
import "./WarehouseList.scss";

class WarehouseList extends Component {
  state = {
    WarehouseList: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8081/warehouses")
      .then((res) => {
        this.setState({
          WarehouseList: res.data,
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
        <div className="main">
          <h1 className="main__title">Warehouses</h1>
          <div className="main__top">
            <h1 className="main__title--tablet">Warehouses</h1>
            <div className="main__right-wrap">
              <form className="main__search">
                <input
                  className="main__search-box"
                  type="text"
                  placeholder="Search..."
                  required
                ></input>
              </form>
              <div className="btn-wrap">
                <button className="main__btn-wrap--btn">
                  + Add New Warehouse
                </button>
              </div>
            </div>
          </div>
          <div className="title-bar">
            <div className="title-bar__position">
              <p>WAREHOUSE</p>
              <img className="scroll" src={scroll} />
            </div>
            <div className="title-bar__position">
              <p>CONTACT NAME</p>
              <img className="scroll" src={scroll} />
            </div>
            <div className="title-bar__position">
              <p>ADDRESS</p>
              <img className="scroll" src={scroll} />
            </div>
            <div className="title-bar__position">
              <p>CONTACT INFORMATION</p>
              <img className="scroll" src={scroll} />
            </div>
            <p>ACTIONS</p>
          </div>
        </div>
        <Warehouses warehouseList={this.state.WarehouseList} />
      </>
    );
  }
}

export default WarehouseList;
