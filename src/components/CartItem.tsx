
export default function CartItem({name,price,quantity}:Props.Product){
  
return(
    <div>
      
        <p>{name} - {price}$ | {quantity}</p>
    </div>
)
}