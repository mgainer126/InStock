import "../WarehouseDetials/WarehouseDetails.scss";
import back from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import InventorySelectedWarehouse from "../InventorySelectedWarehouse/InventorySelectedWarehouse";
import { Link } from "react-router-dom";

function WarehouseDetails({ selectedWarehouse }) {
  console.log(selectedWarehouse);

  return (
    <div className="warehouse-page">
      <div className="info">
        <div className="info__wharehouse-head">
          <img className="info__back-btn" src={back} alt="back button"></img>
          <h3 className="info__warehouse-loc">{selectedWarehouse.name}</h3>
          <Link>
            <img className="info__edit-btn" src={edit} alt="edit"></img>
          </Link>
        </div>
        <div className="tablet__alignment">
          <address className="info__address">
            <h4 className="info__title">WAREHOUSE ADDRESS:</h4>
            <p>{selectedWarehouse.address}</p>
            <p>{selectedWarehouse.city}</p>
          </address>
          <contact className="info__contact">
            <div className="info__contact-name">
              <h4 className="info__title">CONTACT NAME:</h4>
              <p>{selectedWarehouse.contact.name}</p>
              <p>{selectedWarehouse.contact.position}</p>
            </div>
            <div className="info__contact-info">
              <h4 className="info__title">CONTACT INFORMATION:</h4>
              <p>{selectedWarehouse.contact.phone}1</p>
              <p>{selectedWarehouse.contact.email}</p>
            </div>
          </contact>
        </div>
      </div>

      {/* //inventory filter  */}

      <div className="inventory">
        <div className="inventory__filter">
          <h3>INVETORY ITEM</h3>
          <h3>CATEGORY</h3>
          <h3>STATUS</h3>
          <h3>QUANTITY</h3>
          <h3>ACTIONS</h3>
        </div>
      </div>

      {/* Inventory Item  */}
      {/* <div className="inventory__items">
          <section className="inventory__info">
            <div className="inventory__item">
              <h4 className="info__title">INVENTORY ITEM</h4>
              <p className="inventory__item--1">Television</p>
            </div>
            <section className="inventory__detail">
              <div className="inventory__cat">
                <h4 className="info__title">CATEGORY</h4>
                <p className="inventory__item--2">Electronic</p>
              </div>
            </section>
          </section> */}
      {/* Inventory Status
          <section className="inventory__stock">
            <div className="inventory__stats">
              <h4 className="info__title">STATUS</h4>
              <p className="inventory__item--3">IN STOCK</p>
            </div>
            <div className="inventory__qty">
              <h4 className="info__title">QTY</h4>
              <p className="inventory__item--4">500</p>
            </div>
          </section>
          <section className="inventory__cta--tablet">
            <img className="inventory__trash" src={trash} alt="trash"></img>
            <img className="inventory__edit" src={edit} alt="edit"></img>
          </section>
        </div>
      </div>
      <section className="inventory__cta--mobile">
        <img className="inventory__trash" src={trash} alt="trash"></img>
        <img className="inventory__edit" src={edit} alt="edit"></img>
      </section> */}
    </div>
  );
}

export default WarehouseDetails;
