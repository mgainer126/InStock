import trash from "../assets/Icons/delete_outline-24px.svg";
import edit from "../assets/Icons/edit-24px.svg";

function Inventory({ inventoryarr }) {
  console.log(inventoryarr);
  return inventoryarr.map((item) => {
    return (
      <>
        <ul className="item">
          <li className="item__item">{item.itemName}</li>
          <li className="item__category">{item.category}</li>
          <li className="item__status">{item.status}</li>
          <li className="item__qty">{item.quantity}</li>
          <li className="item__warehouse">{item.warehouseName}</li>
          <li className="item__action">
            <img src={trash} alt="trash"></img>
            <img src={edit} alt="edit"></img>
          </li>
        </ul>
        {/* WAREHOUSE */}
        <h3 className="inv-det__ware-title">WAREHOUSE:</h3>
        <p className="inv-det__ware">{item.warehouseName}</p>
      </>
    );
  });
}

export default Inventory;
