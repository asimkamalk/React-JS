const Copy = () => {
  const copyHandler = () => {
    alert("Stop Stealing my code");
  };
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim sit
      voluptatem aliquid eveniet molestiae nobis, consequuntur itaque eius
      accusamus?
    </p>
  );
};
export default Copy;
