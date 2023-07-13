import "./ComponentStyles/Navbar.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbar() {

  const CartItems = useSelector((state:{CartSliceState:Array<{}>})=>{
    return state.CartSliceState;
  })
  return (
    <div className="NavWrapper">
        <div className="InnerNavWrapper">
            <div className="FirstHalfTitles">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/cart">Cart <sup>{CartItems.length-1}</sup></Link></li>
                </ul>
            </div>
            <div className="SecondHalfTitles">
                <ul>
                    <li><Link to="/user">User</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar