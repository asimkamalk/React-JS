const JSXRules = () => {
  return (
    <div>
      <h1>JSX Rules</h1>
      <p>
        JSX must return a{" "}
        <span style={{ fontWeight: "bold" }}>single parent element</span>
      </p>
      <p>
        JSX element must be{" "}
        <span style={{ fontWeight: "bold" }}>properly closed</span>
      </p>
      <p>
        JSC attributes are written using{" "}
        <span style={{ fontWeight: "bold" }}>Camel Case </span> (e.g.
        <code style={{ color: "#E4D00A" }}>className</code> instead of{" "}
        <code style={{ color: "#E4D00A" }}> class </code>)
      </p>
    </div>
  );
};
export default JSXRules;
