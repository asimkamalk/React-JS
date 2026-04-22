const Expressions = () => {
  let greeting = "Good Day";
  let myName = "Asim";
  let currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <h1>
        {greeting},{" "}
        <span style={{ textDecoration: "underline" }}>{myName}</span>
      </h1>
      <p>Current Date: {currentDate}</p>
    </div>
  );
};
export default Expressions;
