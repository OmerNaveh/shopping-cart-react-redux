import {  useDispatch } from "react-redux";
import { decrement } from "../redux/store";

export default function Product({name,price,quantity}:Props.Product){
    const dispatch = useDispatch();
return(
    <div>
        <p>{name} - {price}$ | {quantity}</p>
        <button onClick={()=>{dispatch(decrement({ name, quantity, price }))}}>Add to cart</button>
    </div>
)
}