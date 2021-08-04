import "../WarehouseDetails/WarehouseDetails.scss";
import trash from "../../assets/images/Icons/delete_outline-24px.svg";
import edit from "../../assets/images/Icons/edit-24px.svg";
import back from "../../assets/images/Icons/arrow_back-24px.svg";

function WharehouseDetails() {
  return (
    <>
      <div className="info">
        <div className="info__wharehouse-head">
          <img className="info__back-btn" src={back} alt="back button"></img>
          <h3 className="info__warehouse-loc">King West</h3>
          <img className="info__edit-btn" src={edit} alt="edit"></img>
        </div>
        <address className="info__address">
          <h4 className="info__title">WAREHOUSE ADDRESS:</h4>
          <p>469 King Street West,</p>
          <p>Toronto, CAN</p>
        </address>
        <contact className="info__contact">
          <div className="info__contact-name">
            <h4 className="info__title">CONTACT NAME:</h4>
            <p>Graeme Lyon</p>
            <p>Warehouse Manager</p>
          </div>
          <div className="info__contact-info">
            <h4 className="info__title">CONTACT INFORMATION:</h4>
            <p>+ 1 (647) 504-0911</p>
            <p>glyon@instock.com</p>
          </div>
        </contact>
      </div>

      <div className="inventory">
        <section className="inventory__info">
          <div className="inventory__item">
            <h4 className="info__title">INVENTORY ITEM</h4>
            <p>Television</p>
          </div>
          <div className="inventory__stats">
            <h4 className="info__title">STATUS</h4>
            <p>IN STOCK</p>
          </div>
        </section>
        <section className="inventory__detail">
          <div className="inventory__cat">
            <h4 className="info__title">CATEGORY</h4>
            <p>Electronic</p>
          </div>
          <div className="inventory__qty">
            <h4 className="info__title">QTY</h4>
            <p>500</p>
          </div>
        </section>
        <section className="inventory__cta">
          <img className="inventory__trash" src={trash} alt="trash"></img>
          <img className="inventory__edit" src={edit} alt="edit"></img>
        </section>
      </div>
    </>
  );
}

export default WharehouseDetails;
