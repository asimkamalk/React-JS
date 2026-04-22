const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 100,
    availability: "In-Stock",
  };

  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};
export default ProductInfo;
