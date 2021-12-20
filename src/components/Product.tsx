import {  useDispatch } from "react-redux";
import { decrement } from "../redux/store";

export default function Product({name,price,quantity}:Props.Product){
    const dispatch = useDispatch();
return(
    <div className="product">
        <p>{name} - {price}$ | <span className="quantity">{quantity}</span></p>
        <button className='addProduct' onClick={()=>{dispatch(decrement({ name, quantity, price }))}}>Add to cart</button>
    </div>
)
}