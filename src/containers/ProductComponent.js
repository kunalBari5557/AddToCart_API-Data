import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const [quantity, setQuantity] = useState(0)

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevcount => prevcount - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity(prevcount => prevcount + 1)
  }

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
            <div className="ui vertical button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon">{quantity}</i>
              </div>
              <button onClick={handleIncrement}>Add to Cart</button>
              <button onClick={handleDecrement}>Remove Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
