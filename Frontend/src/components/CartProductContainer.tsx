import {Product} from '../types'
import "./ComponentStyles/ProductContainer.css"
import {Link} from "react-router-dom"
// import { useDispatch } from 'react-redux';
import "./ComponentStyles/CartProductContainer.css"
function CartProductContainer({product}: Product) {
    return (
    <div className="CartProductWrapper">
        <img
          src={product.image}
          alt=""
          style={{ width: "10rem", height: "10rem" }}
        />
        <p className='CartProductTitle'><Link to={`/product/${product.id}`}>{product.title?.substring(0,60)}</Link></p>
        <section>
          <button>Buy Now</button>
        </section>
    </div>
  );
}

export default CartProductContainer;
