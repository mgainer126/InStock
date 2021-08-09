import "./AddNewInventoryItem.scss";
import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

class AddNewInventoryItem extends React.Component {
	render() {
		return (
			<>
				<div className="card">
					<div className="card__edit">
						<img className="card__arrow" src={backArrow} alt="backarrow" />
						<h1 className="card__title">Add New Inventory Item </h1>
					</div>
					<div className="form-wrapper">
						<div className="form">
							<h1 className="form__title">Item Details</h1>
							<form className="form__container">
								<label className="form__label" htmlFor="name">
									Item Name
								</label>
								<input
									placeholder="Item Name"
									type="name"
									className="form__input-box--one"
								/>
								<label className="form__label" htmlFor="name">
									Description
								</label>
								<input
									placeholder="Please enter a brief item description..."
									type="text"
									className="form__input-box--description"
								/>
								<label className="form__label" htmlFor="name">
									Category
								</label>
								<select className="form__input-box">
									<option value="Please Select">Please Select</option>
									<option value="Electronics">Electronics</option>
									<option value="Gear">Gear</option>
									<option value="Apparel">Apparel</option>
									<option value="Accessories">Accessories</option>
									<option value="Health">Health</option>
								</select>
							</form>
						</div>

						<div id="left-border" className="form">
							<h1 className="form__title">Item Availability</h1>
							<form className="form__container">
								<label className="form__label" htmlFor="name">
									Status
								</label>
								<div className="status__wrapper">
									<div>
										<input type="radio" value="In Stock" />
										<label className="form__label" htmlFor="name">
											In Stock
										</label>
									</div>
									<div>
										<input type="radio" value="Out of Stock" />
										<label className="form__label" htmlFor="name">
											Out of Stock
										</label>
									</div>
								</div>
								<label className="form__label" htmlFor="name">
									Quantity
								</label>
								<input
									type="text"
									id="quantity"
									className="form__input-box--one"
								/>
								<label className="form__label" htmlFor="name">
									Warehouse
								</label>
								<select className="form__input-box">
									<option value="Please Select">Please Select</option>
									<option value="Manhatten">Manhattan</option>
									<option value="King West">King West</option>
									<option value="Grabville">Granville</option>
									<option value="San Fran">San Fran</option>
									<option value="San Monica">San Monica</option>
									<option value="Seattle">Seattle</option>
									<option value="Montreal">Montreal</option>
								</select>
							</form>
						</div>
					</div>
					<div className="button">
						<button className="button__cancel" type="submit">
							Cancel
						</button>

						<button className="button__add-item" type="submit">
							+ Add Item
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default AddNewInventoryItem;
