import Product from './Product'
import { useSelector } from "react-redux";

export default function ProductList(){
    const { products } = useSelector(
        (state: { products: Props.Product[] }) => state
      );
    function Products() {
      const JSXproducts = products.map(({ name, price, quantity }) => (
        <Product name={name} price={price} quantity={quantity} />
      ));
      return JSXproducts;
    }
    return(
        <div>
          <h3>Products</h3>
          {Products()}
        </div>
    )
    }