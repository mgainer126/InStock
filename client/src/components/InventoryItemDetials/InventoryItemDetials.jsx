import "../InventoryItemDetials/InventoryItemDetials.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";

function InventoryItemDetails({ foundItem }) {
  console.log(foundItem);
  return (
    // Refer diagram 5 in Figma
    <div className="inv-det">
      {/* Header */}
      <section className="inv-det__head">
        <img
          src={arrowBack}
          alt="back arrow"
          className="inv-    margin-left: 10rem;"
        ></img>
        <h2 className="inv-det__itm">{foundItem.itemName}</h2>
        <img src={edit} alt="edit btn" className="inv-det__editbtn"></img>
      </section>
      <section className="main">
        {/* BODY */}
        <section className="body">
          <h3 className="inv-det__title-des">ITEM DESCRIPTION:</h3>
          <p className="inv-det__des">{foundItem.description}</p>

          <h3 className="inv-det__title-cat">CATEGORY:</h3>
          <p className="inv-det__cat">{foundItem.category}</p>
        </section>

        {/* STATUS AND QUANTITY */}
        <section className="stat-quality">
          <div className="inv-det__stat-qnt-alignment">
            <div className="inv-det__stat-grp">
              <h3 className="inv-det__stat-title">STATUS:</h3>
              <p className="inv-det__stat">{foundItem.status}</p>
            </div>
            <div className="inv-det__qnt-grp">
              <h3 className="inv-det__qnt-title">QUANTITY:</h3>
              <p className="inv-det__qnt">{foundItem.quantity}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default InventoryItemDetails;
