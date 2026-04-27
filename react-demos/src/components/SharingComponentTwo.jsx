const SharingComponentTwo = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();
  return (
    <div>
      <h2>Sharing Component Two</h2>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};
export default SharingComponentTwo;
