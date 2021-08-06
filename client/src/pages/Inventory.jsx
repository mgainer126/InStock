import trash from "../assets/Icons/delete_outline-24px.svg";
import edit from "../assets/Icons/edit-24px.svg";
import "../pages/Inventory.scss";

function Inventory({ inventoryarr }) {
  console.log(inventoryarr);
  return inventoryarr.map((item) => {
    return (
      <div>
        <ul className="item">
          <div className="item__arrangement">
            <section className="item__sub-arrangement">
              <div>
                <h4>INVENTORY ITEM</h4>
                {/* {item.itemName + " " + " > "} */}
                <li className="item__item">{item.itemName + " " + " > "}</li>
              </div>
              <div>
                <h4>CATEGORY</h4>
                {/* {item.category} */}
                <li className="item__category">{item.category}</li>
              </div>
            </section>
            <section className="item__sub-arrangement">
              <div>
                <h4>STATUS</h4>
                {/* {item.status} */}
                <li className="item__status">{item.status}</li>
              </div>
              <div>
                <h4>QUANTITY</h4>
                {/* {item.quantity} */}
                <li className="item__qty">{item.quantity}</li>
              </div>
              <div>
                <h4>WAREHOUSE</h4>
                {/* {item.warehouseName} */}
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
