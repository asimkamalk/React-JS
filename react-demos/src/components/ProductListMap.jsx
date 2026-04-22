const ProductListMap = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 100,
      availability: "In-Stock",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 50,
      availability: "Out of Stock",
    },
    {
      id: 3,
      name: "Tablet",
      price: 200,
      availability: "In-Stock",
    },
  ];
  return (
    <div>
      {products.map(({ id, name, price, availability }) => (
        <ul key={id}>
          <li>Name: {name}</li>
          <li>Price: {price}</li>
          <li>Availability: {availability}</li>
        </ul>
      ))}
    </div>
  );
};
export default ProductListMap;
