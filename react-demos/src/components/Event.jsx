const Event = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return <button onClick={handleClick}>Click me</button>;
};
export default Event;
