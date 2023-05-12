import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../style/Products.css";
import useCart from "../hooks/useCart";

const Products = ({ products, handleVisibility }) => {
  const { addToCart } = useCart();

  const totalProducts = products.length;
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  return (
    <main className="products">
      <ul className="products-list">
        {products
          .map((product) => (
            <li key={product.id} className="product-card">
              <div className="img-container">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-description">
                <strong>{product.title}</strong>
                <p className="brand">{product.brand}</p>
                <p className="rating">
                  <FontAwesomeIcon icon={faStar} className="star" />{" "}
                  {product.rating} Ratings
                </p>
                <p className="price">{product.price}€</p>
              </div>
              <div className="button-container">
                <button
                  className="add-button"
                  onClick={() => {
                    addToCart(product);
                    handleVisibility();
                  }}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))
          .slice(firstIndex, lastIndex)}
      </ul>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </main>
  );
};

export default Products;
