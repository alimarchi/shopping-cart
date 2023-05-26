# Shopping Cart 

---

This web application is built using React and JavaScript, and it serves as an e-commerce platform. The application retrieves product data from an API and displays them in a paginated manner. Users have the ability to filter the products based on category or minimum price. The application includes a shopping cart feature, which appears as a modal window. Users can add products to the cart and manage the quantity of items. Additionally, they have the option to remove individual products or clear the entire cart.

#### Features
- **Pagination**: Products are displayed in pages, allowing users to easily navigate through the available products. Users can click on previous or next buttons or directly select the page number. The pagination functionality is implemented using a custom Pagination component, without relying on external libraries.
- **Responsive Design**: The application has been thoughtfully designed with pure CSS to ensure a seamless experience across a variety of devices, including mobile, tablet, and laptop screens. The responsive layout provides optimal usability and visual appeal.
- **Local storage**: The shopping cart is automatically saved in the local storage and is updated with every change. This allows users to recover their previous shopping cart even after updating or closing the application, providing a convenient and personalized shopping experience.
- **Shopping cart**: The shopping cart is presented in a modal window, where users can easily review all the products they have added. Users have the ability to adjust the quantity of individual items, remove specific products, or clear the entire cart. Additionally, the total cost of the products in the cart is calculated and displayed.
- **API integration**: All product information is fetched using an external API called dummyJSON. The API provides 100 products, which are retrieved each time the application is refreshed. A spinner is displayed until the products data is ready, ensuring a smooth user experience.
- **Filters**:Products can be filtered based on the minimum price or category. Users can refine their product selection by specifying their desired price range or selecting a specific category.
- **useContext**: The application leverages the useContext hook to create a cart and filters context. This allows for easy sharing and access of the cart and filters data throughout the application, eliminating the need for prop drilling and enhancing code organization.
- **useReducer**: The useReducer hook is utilized to simplify the logic for managing different actions that operate on the shopping cart state. This enables a more streamlined and maintainable approach to handling cart-related functionality.

#### Libraries

- [Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)

#### API

- [dummyJSON](https://dummyjson.com/)

#### How to run the project locally:

To run the project locally, clone the repository (`git clone <repo_url>`)and perform the following command-line actions:

```
cd shopping-cart
npm install
```

Start your application: `npm start`

The application will automatically open in your browser at http://localhost:3000. 

#### Technologies Used
- React
- HTML / pure CSS
- JavaScript
