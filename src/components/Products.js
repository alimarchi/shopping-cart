import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../style/Products.css";

const Products = ({ products }) => {
  const [pageNumber, setPageNumber] = useState(1);

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
                <p className="rating">Rating: {product.rating}</p>
                <p className="price">{product.price}€</p>
              </div>
              <div className="button-container">
                <button className="add-button">Add to cart</button>
              </div>
            </li>
          ))
          .slice(pagesVisited, pagesVisited + productsPerPage)}
      </ul>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </main>
  );
};

export default Products;
