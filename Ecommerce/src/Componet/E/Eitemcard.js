import React from "react";
import "../../App.css";
import { useCart } from "react-use-cart";
const Eitemcard = (props) => {
  const { addItem } = useCart();
  return (
    <div>
      <section>
     <div className="">
      <div className="">


      </div>
      <div className="">
      <div className="">
          <div className="mx-2 mb-4">
            <div className="card-container ">
              <div className="card p-0 overflow-hidden h-100 shadow  ">
                <img src={props.image} className="image-max card-img-top" />

                <div className="card-body">
                  <h4 className="card-title text-info">{props.title}</h4>
                  <p className="card-text">{props.des}</p>

                  <h5 className="card-title text-dark">{props.description}</h5>
                  <h5 className="text-info">{props.category}</h5>
                  <h5 className="card-title text-dark"> $ {props.price}</h5>
                  <p>{props.rating}</p>

                  <button
                    className="btn btn-info"
                    onClick={() => addItem(props.item)}
                  >
                    Add to card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
      </section>
    </div>
  );
};

export default Eitemcard;
