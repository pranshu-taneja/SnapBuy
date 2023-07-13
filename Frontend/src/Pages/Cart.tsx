import { useSelector } from "react-redux/es/hooks/useSelector"
import CartProductContainer from "../components/CartProductContainer";
import "./PageStyles/Cart.css"
import {Product} from "../types";

function Cart() {

  const CartProducts:Array<Product> = useSelector((state:{})=>{
    return state.CartSliceState;
  })

  {console.log(CartProducts)};
  
  return (
    <div className="CartProductsWrapper">
        {
          CartProducts.slice(1).map(({product})=>{
            {console.log(product)}
            return(
            <div >
              <CartProductContainer {...product}></CartProductContainer>
            </div>
            )
          })
        }
    </div>
  )
}

export default Cart