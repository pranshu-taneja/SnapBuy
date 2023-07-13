import {Product} from '../types'
import "./ComponentStyles/ProductContainer.css"
import {Link} from "react-router-dom"
// import { useDispatch } from 'react-redux';
import "./ComponentStyles/CartProductContainer.css"
function CartProductContainer(prop: Product) {
  // const dispatch = useDispatch();

    {console.log("Prop:",prop)}
  return (
    <div className="CartProductWrapper">
        <img
          src={prop.image}
          alt=""
          style={{ width: "10rem", height: "10rem" }}
        />
        <p className='CartProductTitle'><Link to={`/product/${prop.id}`}>{prop.title.substring(0,60)}</Link></p>
        <section>
          <button>Buy Now</button>
        </section>
    </div>
  );
}

export default CartProductContainer;
