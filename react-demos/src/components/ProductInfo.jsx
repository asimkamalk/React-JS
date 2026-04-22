const ProductInfo = () => {
  let productName = "Laptop";
  let productPrice = 100;
  let productAvailability = "In-Stock";

  return (
    <div>
      <p>Name: {productName}</p>
      <p>Price: {productPrice}</p>
      <p>Availability: {productAvailability}</p>
    </div>
  );
};
export default ProductInfo;
