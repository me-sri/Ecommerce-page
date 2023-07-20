import React from "react";
import "../App.css";
import { useCart } from "react-use-cart";
// import (useCart)
const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <div className="card-img-top">
          <img src={props.Image} className="image-max" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-info">{props.title}</h2>
          <p className="card-text">{props.des}</p>

          <h5 className="card-title text-dark">{props.description}</h5>
          <h5 className="text-info">{props.category}</h5>
          <h5 className="card-title text-dark"> $ {props.price}</h5>
          <p>{props.rating}</p>

          <button className="btn btn-info" onClick = {() => addItem(props.item)}>
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
