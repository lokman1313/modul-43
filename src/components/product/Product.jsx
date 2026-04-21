
const Product = ({product}) => {
    const {name,price,description}=product;
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="justify-between items-center card-actions">
        <p>{price}</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default Product;