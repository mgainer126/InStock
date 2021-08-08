import "./AddNewInventoryItem.scss";
import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

class AddNewInventoryItem extends React.Component {
	render() {
		return (
			<>
				<div className="card">
					<div className="card__edit">
						<img className="card__arrow" src={backArrow} />
						<h1 className="card__title">Add New Inventory Item </h1>
					</div>
					<div className="form-wrapper">
						<div className="form">
							<h1 className="form__title">Item Details</h1>
							<form className="form__container">
								<label className="form__label" htmlFor="name">
									Item Name
								</label>
								<input type="name" className="form__input-box" />
								<label className="form__label" htmlFor="name">
									Description
								</label>
								<input type="text" className="form__input-box--description" />
								<label className="form__label" htmlFor="name">
									Category
								</label>
								<select className="form__input-box" />
								<option value="Please Select">Please Select</option>
								<option value="Please Select">Manhattan</option>
                                
						
                           
						</div>

						<div className="form">
							<h1 className="form__title">Item Availability</h1>
							<form className="form__container">
								<label className="form__label" htmlFor="name">
									Status
								</label>
								<div className="status__wrapper">
									<div>
										<input type="text" className="form__input-box--status" />
										Instock
									</div>
									<div>
										<input type="text" className="form__input-box--status" />{" "}
										Out of stock
									</div>
								</div>
								<label className="form__label" htmlFor="name">
									Quantity
								</label>
								<input type="text" className="form__input-box" />
								<label className="form__label" htmlFor="name">
									Warehouse
								</label>
								<input type="text" className="form__input-box" />
							</form>
						</div>
					</div>
					<div className="button">
						<button className="button__cancel" type="submit">
							Cancel
						</button>

						<button className="button__add-item" type="submit">
							Add Item
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default AddNewInventoryItem;
