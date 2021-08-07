import trash from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "../Inventory/Inventory.scss";
import { Link } from "react-router-dom";

function Inventory({ inventoryarr, clickhandle }) {
  console.log(inventoryarr);
  return inventoryarr.map((item) => {
    return (
      <div>
        <ul className="item">
          <div className="item__arrangement">
            <section className="item__sub-arrangement">
              <div>
                <h4>INVENTORY ITEM</h4>
                <div onClick={() => clickhandle(item)}>
                  <Link to={`/itemDetails/${item.id}`}>
                    <li className="item__item">
                      {item.itemName + " " + " > "}
                    </li>
                  </Link>
                </div>
              </div>
              <div>
                <h4>CATEGORY</h4>
                <li className="item__category">{item.category}</li>
              </div>
            </section>
            <section className="item__sub-arrangement">
              <div>
                <h4>STATUS</h4>
                <li className="item__status">{item.status}</li>
              </div>
              <div>
                <h4>QUANTITY</h4>
                <li className="item__qty">{item.quantity}</li>
              </div>
              <div>
                <h4>WAREHOUSE</h4>
                <li className="item__warehouse">{item.warehouseName}</li>
              </div>
            </section>
          </div>
          <div className="item__action">
            <img src={trash} alt="trash"></img>
            <img src={edit} alt="edit"></img>
          </div>
        </ul>
      </div>
    );
  });
}

export default Inventory;
