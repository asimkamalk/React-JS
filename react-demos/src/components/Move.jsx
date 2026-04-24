const Move = () => {
  function moveHanlder() {
    alert("Mouse moved event fired");
    console.log("Mouse moved event fired");
  }
  return <p onMouseMove={moveHanlder}>Move your mouse here</p>;
};
export default Move;
