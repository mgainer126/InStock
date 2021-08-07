import trash from "../assets/Icons/delete_outline-24px.svg";
import edit from "../assets/Icons/edit-24px.svg";
import "../pages/Inventory.scss";

function Inventory({ inventoryarr }) {
  console.log(inventoryarr);
  const InStock = ({ inStock }) => (
    <li className={`item_status ${inStock === 'In Stock' ? "itemstatus--in-stock" : "item_status--out-stock"}`}>{inStock}</li>
  );
  return inventoryarr.map((item) => {
    return (
      <div key={item.id}>
        <ul className="item">
          <div className="item__arrangement">
            <section className="item__sub-arrangement">
              <div>
                <h4>INVENTORY ITEM</h4>
                <li className="item__item">{`${item.itemName} >`}</li>
              </div>
              <div>
                <h4>CATEGORY</h4>
                <li className="item__category">{item.category}</li>
              </div>
            </section>
            <section className="item__sub-arrangement">
              <div>
                <h4>STATUS</h4>
                <InStock inStock={item.status }></InStock>
              </div>
              <div>
                <h4>QTY</h4>
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