import {Product as apiData} from '../types'
import "./ComponentStyles/ProductContainer.css"
import {Link} from "react-router-dom"
import { addToCart } from '../store/CartSlice';
import { useDispatch } from 'react-redux';

function ProductContainer(prop: apiData) {
  const dispatch = useDispatch();

  function handleCart(){
    dispatch(addToCart(prop));
  }

  return (
    <div className="ProductWrapper">
        <img
          src={prop.image}
          alt=""
          style={{ width: "10rem", height: "10rem" }}
        />
        <p className='ProductTitle'><Link to={`/product/${prop.id}`}>{prop.title.substring(0,60)}</Link></p>
        <section>
          <button onClick={handleCart}>Add To Cart</button>
        </section>
    </div>
  );
}

export default ProductContainer;
