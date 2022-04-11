import './Product.css';

export default function Product(props) {
  return (
    <div className="Product">
      <img className="ProductImage" src={props.product.image}></img>
      <div className="ProductTitle">{props.product.title}</div>
    </div>
  );
}
