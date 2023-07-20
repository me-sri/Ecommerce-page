import React from "react";
import ItemCard from "./ItemCard";
import { data } from "./data";
const Homes = () => {
  return (
    <div>
      <div>
        <h1 className="text-danger mt-5 text-center">All Items </h1>
        <div>
          <section className=" py-4 container">
            <div className="row justify-content-center">
              {data.prouctData.map((item, index) => {
                return (
                  <ItemCard
                    Image={item.image}
                    title={item.title}
                    des={item.des}
                    description={item.description}
                    price={item.price}
                    category={item.category}
                    // rating={item.rating}
                    item={item}
                    key={index}
                   
                  ></ItemCard>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homes;
