export const getProducts = () => {
  return fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        return data.products;
        
      } else {
        return [];
      }
    });
};
