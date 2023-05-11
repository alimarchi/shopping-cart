import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import "../style/Products.css";
import useCart from "../hooks/useCart";

const Products = ({ products, handleVisibility }) => {
  const { addToCart } = useCart();

  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(products.length / productsPerPage); //round up

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
          .slice(pagesVisited, pagesVisited + productsPerPage)}
      </ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={changePage}
        containerClassName={"pagination-buttons"}
        previousLinkClassName={"previous-button"}
        nextLinkClassName={"next-button"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </main>
  );
};

export default Products;
