import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("none");


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSort = (event) => {
    setSortOption(event.target.value);
  };
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, newPrice, title }) =>
          category === selected ||
         
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, details}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          details={details}
        />
      )
    );
  }

  // const result = filteredData(products, selectedCategory, query);
  // Sorting products based on the selected sort option
  function sortProducts(products, option) {
    const sortedProducts = [...products];
    if (option === "alphabetical-asc") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "alphabetical-desc") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === "price-asc") {
      sortedProducts.sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
    } else if (option === "price-desc") {
      sortedProducts.sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
    }
    return sortedProducts;
  }

  // ... other code

  const sortedProducts = sortProducts(filteredItems, sortOption);

  const result = filteredData(sortedProducts, selectedCategory, query);
  
  return (
    <>
      <Sidebar handleChange={handleChange} handleSort={handleSort} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      
      
    </>
  );
}

export default App;
