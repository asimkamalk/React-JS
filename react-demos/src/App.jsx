import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import JSXRules from "./components/JSXRules";
import Expressions from "./components/Expressions";
import ProductInfo from "./components/ProductInfo";
import List from "./components/List";

const App = () => {
  return (
    <>
      <Header />
      <hr />
      <h2>JSX rules</h2>
      <JSXRules />
      <h2>End of JSX rules</h2>
      <hr />
      <h2>Expressions in React</h2>
      <Expressions />
      <h2>End of Expressions in React</h2>
      <hr />
      <h2>Product Component</h2>
      <ProductInfo />
      <h2>End of Product Component</h2>
      <hr />
      <h2>List using map method</h2>
      <List />
      <h2>End of List using map method</h2>
      <hr />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
