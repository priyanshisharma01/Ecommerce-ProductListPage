import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice,  details ,badge}) => {

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="badge">{badge}</div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          
          <p className="product-detail">{details}</p> {/* Unique detail for each product */}
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
            
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            
          </section>
          <button class="add-to-cart-button">Add to Cart</button>
        </div>
      </section>
    </>
  );
};

export default Card;

