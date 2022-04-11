import './Order.css';
import Product from './Product';

export default function Order(props) {
  return (
    <div className="Order">
      <div className="OrderClientName">{props.order.clientName}</div>
      { props.order.products.map(product => <Product key={product.id} product={product}/>)}
    </div>
  );
}
