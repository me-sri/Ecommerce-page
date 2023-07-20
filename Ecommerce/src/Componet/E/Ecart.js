import React from "react";
import { useCart } from "react-use-cart";
const Ecart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) {
    return <h1 className="text-center">Your cards empty</h1>;
  }
  return (
    <div>
      <section>
        <div className="py-4 container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2>
                card ({totalUniqueItems})total Items :({totalItems})
              </h2>

              <table className="table table-light table-hover m-0">
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img src={item.image} className="image-max" />
                        </td>
                        <td className="text-dark fs-4">{item.title}</td>
                        <td>{item.des}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove Item
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-auto ms-auto">
              <h2>Total price : $ {cartTotal}</h2>
            </div>

            <div>
              <button className="btn btn-danger" onClick={() => emptyCart()}>
                Clear cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecart;
