import { useId } from "react";
import "../style/Filters.css";
import useFilters from "../hooks/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId(); // useId from react is a hook that provides a unique id
  const categoryFilterId = useId();

  const handleMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
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
          value={filters.minPrice}
        />
        <span>€{filters.minPrice}</span>
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
