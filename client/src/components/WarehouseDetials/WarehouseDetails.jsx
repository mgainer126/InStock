import "../WarehouseDetials/WarehouseDetails.scss";
import back from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import InventorySelectedWarehouse from "../InventorySelectedWarehouse/InventorySelectedWarehouse";
import { Link } from "react-router-dom";

function WarehouseDetails({ selectedWarehouse }) {
  console.log(selectedWarehouse);

  return (
    <>
      {selectedWarehouse && (
        <div className="warehouse-page">
          <div className="info">
            <div className="info__wharehouse-head">
              <img
                className="info__back-btn"
                src={back}
                alt="back button"
              ></img>
              <h3 className="info__warehouse-loc">{selectedWarehouse.name}</h3>
              <Link>
                <img className="info__edit-btn" src={edit} alt="edit"></img>
              </Link>
            </div>
            <div className="tablet__alignment">
              <address className="info__address">
                <h4 className="info__title">WAREHOUSE ADDRESS:</h4>
                <p className="info__address">{selectedWarehouse.address}</p>
                <p className="info__address">{selectedWarehouse.city}</p>
              </address>
              <contact className="info__contact">
                <div className="info__contact-name">
                  <h4 className="info__title">CONTACT NAME:</h4>
                  <p className="info__contact-detail">
                    {selectedWarehouse.contact.name}
                  </p>
                  <p className="info__contact-detail">
                    {selectedWarehouse.contact.position}
                  </p>
                </div>
                <div className="info__contact-info">
                  <h4 className="info__title">CONTACT INFORMATION:</h4>
                  <p className="info__contact-info-detail">
                    {selectedWarehouse.contact.phone}1
                  </p>
                  <p className="info__contact-info-detail">
                    {selectedWarehouse.contact.email}
                  </p>
                </div>
              </contact>
            </div>
          </div>

          {/* //inventory filter  */}
        </div>
      )}
    </>
  );
}

export default WarehouseDetails;
