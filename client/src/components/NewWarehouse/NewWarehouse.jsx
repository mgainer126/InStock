import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../api/config";
import { v4 as uuidv4 } from "uuid";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import "./NewWarehouse.scss";

const SetErrorField = ({ value }) => {
  if (!value) {
    return <p className="error">This Field is required</p>;
  }
  return <p></p>;
};
function NewWarehouse() {
  const [warehouseForm, setWarehouseForm] = useState({
    id: "",
    name: "",
    address: "",
    city: "",
    country: "",
    contact: {
      name: "",
      position: "",
      phone: "",
      email: "",
    },
  });
  const onChangeWarehouseName = (event) => {
    setWarehouseForm({ ...warehouseForm, name: event.target.value });
  };

  const onChangeStreeAddress = (event) => {
    setWarehouseForm({ ...warehouseForm, address: event.target.value });
  };
  const onChangeCity = (event) => {
    setWarehouseForm({ ...warehouseForm, city: event.target.value });
  };
  const onChangeCountry = (event) => {
    setWarehouseForm({ ...warehouseForm, country: event.target.value });
  };
  const onChangeContactName = (event) => {
    setWarehouseForm({
      ...warehouseForm,
      contact: { ...warehouseForm.contact, name: event.target.value },
    });
  };
  const onChangePosition = (event) => {
    setWarehouseForm({
      ...warehouseForm,
      contact: { ...warehouseForm.contact, position: event.target.value },
    });
  };
  const onChangePhone = (event) => {
    setWarehouseForm({
      ...warehouseForm,
      contact: { ...warehouseForm.contact, phone: event.target.value },
    });
  };
  const onChangeEmail = (event) => {
    setWarehouseForm({
      ...warehouseForm,
      contact: { ...warehouseForm.contact, email: event.target.value },
    });
  };
  const onSubmitWarehouseForm = () => {
    const isValidateForm = validateWarehouseForm();
    if (isValidateForm) {
      axios
        .post(`${API_URL}/warehouses`, { ...warehouseForm, id: uuidv4() })
        .then(() => {
          setWarehouseForm({});
        });
    }
  };

  const validateWarehouseForm = () => {
    if (
      warehouseForm.name &&
      warehouseForm.address &&
      warehouseForm.country &&
      warehouseForm.city &&
      warehouseForm.contact?.name &&
      warehouseForm.contact?.email &&
      warehouseForm.contact?.phone &&
      warehouseForm.contact?.position
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="new-warehouse">
      <div className="new-warehouse__header">
        <img src={arrow} alt="arrow" />
        <h1>Add New Warehouse</h1>
      </div>
      <div className="form-container">
        <div className="new-warehouse__content">
          <h4>Warehouse Details</h4>
          <div className="new-warehouse__form-field">
            <label className="label">Warehouse Name</label>
            <input
              type="text"
              placeholder="Warehouse Name"
              className="input"
              onChange={onChangeWarehouseName}
              value={warehouseForm?.name}
            ></input>
            <SetErrorField value={warehouseForm?.name}></SetErrorField>
          </div>
          <div className="new-warehouse__form-field">
            <label className="label">Street Address</label>
            <input
              type="text"
              placeholder="Street Address"
              className="input"
              onChange={onChangeStreeAddress}
              value={warehouseForm?.address}
            ></input>
            <SetErrorField value={warehouseForm?.address}></SetErrorField>
          </div>
          <div className="new-warehouse__form-field">
            <label className="label">City</label>
            <input
              type="text"
              placeholder="City"
              className="input"
              onChange={onChangeCity}
              value={warehouseForm?.city}
            ></input>
            <SetErrorField value={warehouseForm?.city}></SetErrorField>
          </div>
          <div className="new-warehouse__form-field">
            <label className="label">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="input"
              onChange={onChangeCountry}
              value={warehouseForm?.country}
            ></input>
            <SetErrorField value={warehouseForm?.country}></SetErrorField>
          </div>
        </div>
        <div className="new-warehouse__content">
          <h4>Contact Details</h4>
          <div className="new-warehouse__form-field">
            <label className="label">Contact Name</label>
            <input
              type="text"
              placeholder="Contact Name"
              className="input"
              onChange={onChangeContactName}
              value={warehouseForm?.contact?.name}
            ></input>
            <SetErrorField value={warehouseForm?.contact?.name}></SetErrorField>
          </div>
          <div className="new-warehouse__form-field">
            <label className="label">Position</label>
            <input
              type="text"
              placeholder="Position"
              className="input"
              onChange={onChangePosition}
              value={warehouseForm?.contact?.position}
            ></input>
            <SetErrorField
              value={warehouseForm?.contact?.position}
            ></SetErrorField>
          </div>
          <div className="new-warehouse__form-field">
            <label className="label">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="input"
              onChange={onChangePhone}
              value={warehouseForm?.contact?.phone}
            ></input>
            <SetErrorField
              value={warehouseForm?.contact?.phone}
            ></SetErrorField>
          </div>
          <div className="new-warehouse__form-field">
            <label className="label">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="input"
              onChange={onChangeEmail}
              value={warehouseForm?.contact?.email}
            ></input>
            <SetErrorField
              value={warehouseForm?.contact?.email}
            ></SetErrorField>
          </div>
        </div>
      </div>
      <div className="new-warehouse-footer">
        <button className="new-warehouse-footer__button">Cancel</button>
        <button
          className="new-warehouse-footer__button new-warehouse-footer__button--primary"
          onClick={onSubmitWarehouseForm}
        >
          + Add Warehouse
        </button>
      </div>
    </div>
  );
}

export default NewWarehouse;
