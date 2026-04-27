const SharingComponentOne = ({ count, onClickHandler }) => {
  return (
    <div>
      <h2>Sharing Component One</h2>
      <p>{count}</p>
      <button onClick={onClickHandler}>+</button>
    </div>
  );
};
export default SharingComponentOne;
