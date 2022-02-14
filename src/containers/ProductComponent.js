import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, NavLink } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <NavLink to={`/product/${id}`}></NavLink>
        <Outlet />
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={image} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">{price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
