//Passing Props to Warehouse Input for title and button text 
import WarehouseInput from '../WarehouseInput/WarehouseInput';
import './EditWarehouse.scss'
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import React from 'react';


class EditWarehouse extends React.Component {
      //setting state for input felids 
    state = {
      name: "",
      address: "",
      city: "",
      country: "",
      contactName: "",
      contactPosition: "",
      contactPhone: "",
      contactEmail: "",
    };

//   coming from getting single warehouse from backend (waiting for backend next ticket)
    // componentDidMount() {
    //   axios
    //     .get(`/warehouse/${this.props.match.params.id}`)
    //     .then((response) => {
    //       this.setState({
    //         name: response.data.name,
    //         address: response.data.address,
    //         city: response.data.city,
    //         country: response.data.country,
    //         contactName: response.data.contactName,
    //         contactPosition: response.data.contactPosition,
    //         contactPhone: response.data.contactPhone,
    //         contactEmail: response.data.contactEmail
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
        [event.target.address]: event.target.value,
        [event.target.city]: event.target.value,
        [event.target.country]: event.target.value,
        [event.target.contactName]: event.target.value,
        [event.target.contactPosition]: event.target.value,
        [event.target.contactPhone]: event.target.value,
        [event.target.contactEmail]: event.target.value,
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      const updatedWareHouse = {
        //must match state properties 
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        country: this.state.country,
        contactName: this.state.contactName,
        contactPosition: this.state.contactPosition,
        contactPhone: this.state.contactPhone,
        contactEmail: this.state.contactEmail
      };
    //   axios
    //     .patch(`/warehouse/${this.props.match.params.id}`, updatedWareHouse)
    //     .then((response) => {
    //       this.setState({
    //         name: response.data.name,
    //         address: response.data.address,
    //       });
    //       this.props.history.push("/");
    //     })
    //     .catch((err) => {
    //     //   console.log(err);
    //     });
    };
  
    render() {
      return (
          // <div className="container">
        //     <div className="container__edit">
        //     <img src={backArrow}/>
        //     <h1 className="container__title">Edit Warehouse</h1>
        //     </div>
        //     <WarehouseInput button={"Save"} operation={"Edit"}/> 
        // </div>
        <div className="card">
        <div className="card__container"> 
        <div>
                <div className="form">
                 <h1 className="form__title">Warehouse Details</h1>
                <form onSubmit={this.handleSubmit} className="form__container"> 
                <label className="form__label" htmlFor="name">Warehouse Name</label>
                    <input defaultValue={this.state.name} onChange={this.handleChange}type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Street Address</label>
                    <input defaultValue={this.state.address}onChange={this.handleChange}type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">City</label>
                    <input defaultValue={this.state.city}onChange={this.handleChange}type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Country</label>
                    <input defaultValue={this.state.country}onChange={this.handleChange}type="text" className="form__input-box"/>
                </form>
            </div>

            <div className="form">
                <h1 className="form__title">Contact Details</h1>
                <form className="form__container"> 
                <label className="form__label" htmlFor="name">Contact Name</label>
                    <input defaultValue={this.state.contactName}onChange={this.handleChange}type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Position</label>
                    <input defaultValue={this.state.contactPosition}onChange={this.handleChange}type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Phone Number</label>
                    <input defaultValue={this.state.contactPhone}onChange={this.handleChange}type="text" className="form__input-box"/>
                <label className="form__label" htmlFor="name">Email</label>
                    <input defaultValue={this.state.contactEmail}onChange={this.handleChange}type="text" className="form__input-box"/>
               
            </form> 
            </div> 
            </div>
                <div className="button" >
                <button className="button__cancel" type="submit">Cancel</button>
                <button className="button__save" type="submit"></button>
                </div>  
            </div>  
            </div> 
      );
    }
  }
  
  export default EditWarehouse;
  