import { useState, useId } from "react";
import "../style/Filters.css";

// useId de react es un hook que genera un identificador único

const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="500"
          onChange={handleMinPrice}
        />
        <span>€{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="skincare">Skincare</option>
          <option value="laptops">Laptops</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="tops">Tops</option>
          <option value="sunglasses">Sunglasses</option>
          <option value="groceries">Groceries</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;