import "../InventorySelectedWarehouse/InventorySelectedWarehouse.scss";
import edit from "../../assets/Icons/edit-24px.svg";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import { Link } from "react-router-dom";

function InventorySelectedWarehouse({ inventoryByWarehouse }) {
  console.log(inventoryByWarehouse);
  return inventoryByWarehouse.map((item) => {
    return (
      <div>
        <div className="item">
          <div className="item__arrangement">
            <section className="item__sub-arrangement">
              <div>
                <h4>INVENTORY ITEM</h4>
                {/* <div onClick={() => clickhandle(item)}> */}
                <div>
                  <Link to={`/itemDetails/${item.id}`}>
                    <p className="item__item">{item.itemName + " " + " > "}</p>
                  </Link>
                </div>
              </div>
              <div>
                <h4>CATEGORY</h4>
                <p className="item__category">{item.category}</p>
              </div>
            </section>
            <section className="item__sub-arrangement">
              <div>
                <h4>STATUS</h4>
                <p className="item__status">{item.status}</p>
              </div>
              <div>
                <h4>QUANTITY</h4>
                <p className="item__qty">{item.quantity}</p>
              </div>
              <div>
                <h4>WAREHOUSE</h4>
                <p className="item__warehouse">{item.warehouseName}</p>
              </div>
              <div className="item__action">
                <img src={trash} alt="trash"></img>
                <img src={edit} alt="edit"></img>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  });
}

export default InventorySelectedWarehouse;
