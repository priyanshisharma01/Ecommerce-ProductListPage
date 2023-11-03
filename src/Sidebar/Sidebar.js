import Category from "./Category/Category";
import Price from "./Price/Price";

import "./Sidebar.css";

const Sidebar = ({ handleChange ,handleSort}) => {
  return (
    <>
      <div className="sidebar">
      <div className="sort">
      <label className="sort-title">
      Sort By:
         <select  className="dropdown"onChange={handleSort}>
           <option value="none">None</option>
           <option value="alphabetical-asc">Alphabetical A-Z</option>
           <option value="alphabetical-desc">Alphabetical Z-A</option>
           <option value="price-asc">Price Low to High</option>
           <option value="price-desc">Price High to Low</option>
    </select>
      </label>
      </div>


        
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
       
      </div>
    </>
  );
};

export default Sidebar;
