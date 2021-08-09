import "./EditWarehouse.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditWarehouse extends React.Component {
	state = {
		warehouseDetails: [],
		id: "",
		name: "",
		address: "",
		city: "",
		country: "",
		contactName: "",
		contactPosition: "",
		contactPhone: "",
		contactEmail: "",
	};

	componentDidMount() {
		axios
			.get(`http://localhost:8081/warehouses`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					warehouseDetails: response.data,
					id: response.data[0].id,
					name: response.data[0].name,
					address: response.data[0].address,
					city: response.data[0].city,
					country: response.data[0].country,
					contactName: response.data[0].contact.name,
					contactPosition: response.data[0].contact.position,
					contactPhone: response.data[0].contact.phone,
					contactEmail: response.data[0].contact.email,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

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

	handleClick = (event) => {
		event.preventDefault();
		debugger;
		console.log(this.state.id);
		const updatedWareHouse = {
			name: this.state.name,
			address: this.state.address,
			city: this.state.city,
			country: this.state.country,
			contactName: this.state.contactName,
			contactPosition: this.state.contactPosition,
			contactPhone: this.state.contactPhone,
			contactEmail: this.state.contactEmail,
		};
		console.log(updatedWareHouse);
		axios
			.patch(
				`http://localhost:8081/warehouses/${this.state.id}`,
				updatedWareHouse
			)
			.then((response) => {
				console.log(response.data);
				this.setState({
					name: response.data.name,
					address: response.data.address,
					city: response.data.city,
					country: response.data.country,
					contactName: response.data.contactName,
					contactPosition: response.data.contactPosition,
					contactPhone: response.data.contactPhone,
					contactEmail: response.data.contactEmail,
				});
				this.props.history.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		console.log(this.state.name);
		console.log(this.state.contactName);
		return (
			<div className="card">
				<div className="card__edit">
					<img className="card__arrow" src={backArrow} />
					<h1 className="card__title">Edit Warehouse</h1>
				</div>
				<div className="form-wrapper">
					<div className="form">
						<h1 className="form__title">Warehouse Details</h1>
						<form className="form__container" onSubmit={this.handleClick}>
							<label className="form__label" htmlFor="name">
								Warehouse Name
							</label>
							<input
								defaultValue={this.state.name}
								onChange={this.handleChange}
								className="form__input-box"
								id="name"
								name="name"
							/>
							<label className="form__label" htmlFor="name">
								Street Address
							</label>
							<input
								defaultValue={this.state.address}
								onChange={this.handleChange}
								type="text"
								className="form__input-box"
								id="address"
								name="address"
							/>
							<label className="form__label" htmlFor="name">
								City
							</label>
							<input
								defaultValue={this.state.city}
								onChange={this.handleChange}
								type="text"
								className="form__input-box"
								id="city"
								name="city"
							/>
							<label className="form__label" htmlFor="name">
								Country
							</label>
							<input
								defaultValue={this.state.country}
								onChange={this.handleChange}
								type="text"
								className="form__input-box"
								id="country"
								name="country"
							/>
						</form>
					</div>

					<div id="left-border" className="form">
						<h1 className="form__title">Contact Details</h1>
						<form className="form__container">
							<label className="form__label" htmlFor="name">
								Contact Name
							</label>
							<input
								defaultValue={this.state.contactName}
								onChange={this.handleChange}
								type="text"
								className="form__input-box"
								id="contactName"
								name="contactName"
							/>
							<label className="form__label" htmlFor="name">
								Position
							</label>
							<input
								defaultValue={this.state.contactPosition}
								onChange={this.handleChange}
								type="text"
								className="form__input-box"
								id="contactPosition"
								name="contactPosition"
							/>
							<label className="form__label" htmlFor="name">
								Phone Number
							</label>
							<input
								defaultValue={this.state.contactPhone}
								onChange={this.handleChange}
								type="text"
								className="form__input-box"
								id="contactPhone"
								name="contactPhone"
							/>
							<label className="form__label" htmlFor="name">
								Email
							</label>
							<input
								defaultValue={this.state.contactEmail}
								onChange={this.handleChange}
								type="text"
								className="form__input-box"
								id="contactEmail"
								name="contactEmail"
							/>
						</form>
					</div>
				</div>
				<div className="button">
					<button className="button__cancel" type="submit">
						Cancel
					</button>
					<Link to="/warehouse">
						<button
							onClick={this.handleClick}
							onChange={this.handleChange}
							className="button__save"
							type="submit"
						>
							Save
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default EditWarehouse;
