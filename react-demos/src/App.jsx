import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import JSXRules from "./components/JSXRules";

const App = () => {
  return (
    <>
      <Header />
      <h2>JSX rules</h2>
      <JSXRules />
      <h2>End of JSX rules</h2>
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
