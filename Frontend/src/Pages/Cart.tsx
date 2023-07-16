import { useSelector } from "react-redux/es/hooks/useSelector"
import CartProductContainer from "../components/CartProductContainer";
import "./PageStyles/Cart.css"
import {Product} from "../types";
import { v4 as uuidv4 } from "uuid";

function Cart() {

  const CartProducts:Array<Product> = useSelector((state:{CartSliceState:Array<Product>})=>{
    return state.CartSliceState;
  })

  
  return (
    <div className="CartProductsWrapper">
        {
          CartProducts.slice(1).map((data)=>{
            return(
            <div >
              <CartProductContainer key={uuidv4()} {...data}></CartProductContainer>
            </div>
            )
          })
        }
    </div>
  )
}

export default Cart