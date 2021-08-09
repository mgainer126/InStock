import "../InventorySelectedWarehouse/InventorySelectedWarehouse.scss";
import edit from "../../assets/Icons/edit-24px.svg";
import trash from "../../assets/Icons/delete_outline-24px.svg";

function InventorySelectedWarehouse({ inventoryByWarehouse }) {
  console.log(inventoryByWarehouse);
  return inventoryByWarehouse.map((item) => {
    return (
      <div className="inventory-wrapper">
        <div className="inventory__items">
          <section className="inventory__info">
            <div className="inventory__item">
              <h4 className="info__title">INVENTORY ITEM</h4>
              <p className="inventory__item--1">{item.itemName} > </p>
            </div>
            <section className="inventory__detail">
              <div className="inventory__cat">
                <h4 className="info__title">CATEGORY</h4>
                <p className="inventory__item--2">{item.category}</p>
              </div>
            </section>
          </section>
          {/* Inventory Status */}
          <section className="inventory__stock">
            <div className="inventory__stats">
              <h4 className="info__title">STATUS</h4>
              <p className="inventory__item--3">{item.status}</p>
            </div>
            <div className="inventory__qty">
              <h4 className="info__title">QTY</h4>
              <p className="inventory__item--4">{item.quantity}</p>
            </div>
          </section>
          <section className="inventory__cta--tablet">
            <img className="inventory__trash" src={trash} alt="trash"></img>
            <img className="inventory__edit" src={edit} alt="edit"></img>
          </section>
        </div>
        <div>
          <section className="inventory__cta--mobile">
            <img className="inventory__trash" src={trash} alt="trash"></img>
            <img className="inventory__edit" src={edit} alt="edit"></img>
          </section>
        </div>
      </div>
    );
  });
}

export default InventorySelectedWarehouse;
