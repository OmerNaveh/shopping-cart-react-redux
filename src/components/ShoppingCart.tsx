import CartItem from './CartItem'
import { useSelector,useDispatch } from "react-redux";
import { checkout } from '../redux/store';

export default function ShoppingCart(){
    const dispatch = useDispatch()
    const { cart } = useSelector(
        (state: { products: Props.Product[],cart:Props.Product[] }) => state
      );
    const total= ()=>{
        let res = 0;
        cart.forEach(item =>{
            res+= item.price * item.quantity
        })
       
        return res
    }
    function displayItems(){
        const JSXproducts = cart.map(({ name, price, quantity }) => (
            <CartItem name={name} price={price} quantity={quantity} />
          ));
          return JSXproducts;
      
    }
    return(
        <div>
            <h2>Shopping Cart</h2>
            <div>
            {displayItems()}
            </div>
            <p>Total: {total()}$</p>
            <button disabled={total()===0} onClick={()=>{dispatch(checkout())}}>checkout</button>
        </div>
    )
}