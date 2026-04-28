import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import JSXRules from "./components/JSXRules";
import Expressions from "./components/Expressions";
import ProductInfo from "./components/ProductInfo";
import List from "./components/List";
import ProductListMap from "./components/ProductListMap";
import PersonProps from "./components/PersonProps";
import ProductProps from "./components/ProductProps";
import CardChildren from "./components/CardChildren";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import GreetingsTernary from "./components/GreetingsTernary";
import StyledCards from "./components/StyledCards";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
import Event from "./components/Event";
import Copy from "./Copy";
import Move from "./components/Move";
import UseState from "./components/UseState";
import UseStateInArray from "./components/UseStateInArray";
import UseStateWithObjects from "./components/UseStateWithObjects";
import UseStateWithArrayOfObject from "./components/UseStateWithArrayOfObject";
import SharingComponentMain from "./components/SharingComponentMain";
import SharingComponentOne from "./components/SharingComponentOne";
import SharingComponentTwo from "./components/SharingComponentTwo";
import UseStateWithFunctions from "./components/UseStateWithFunctions";
import UseStateRandomNumber from "./components/UseStateRandomNumber";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      {/* To see the result uncomment the code below */}
      {/* <Header />
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
      <h2>Product List using map method</h2>
      <ProductListMap />
      <h2>End of Product List using map method</h2>
      <hr />
      <h2>Start of Person Props</h2>
      <PersonProps name="Asim Kamal" age={23} />
      <h2>End of Start of Person Props</h2>
      <hr />
      <h2>Start of Product Props</h2>
      <ProductProps product="Iphone" price={1200} />
      <h2>End of Product Props</h2>

      <hr />
      <h2>Start of Card Children</h2>
      <CardChildren>
        <h1>Card 1</h1>
        <p>This is the description of card 1</p>
      </CardChildren>

      <CardChildren>
        <h1>Card 2</h1>
        <p>This is the description of card 2</p>
      </CardChildren>
      <h2>End of Start of Card Children</h2>
      <hr />
      <h2>Weather Condiontional Rendering if-else</h2>
      <Weather />
      <h2>End of Weather Condiontional Rendering if-else</h2>
      <hr />
      <h2>User Status Condiontional Rendering if-else</h2>
      <UserStatus loggedIn={true} isAdmin={false} />
      <h2>End of User Status Condiontional Rendering if-else</h2>
      <hr />
      <h2>Greeting Condiontional Rendering Ternary </h2>
      <GreetingsTernary timeOfDay={"morning"} />
      <h2>Greeting Condiontional Rendering Ternary </h2>
      <hr />
      <MainContent />
      <Footer /> */}

      {/* To see the result uncomment the code below */}

      {/* <StyledCards />
      <ProfileCard />
      <IconComponent />
      <Event />
      <Copy />
      <Move /> */}
      <UseState />
      <UseStateInArray />
      <UseStateWithObjects />
      <UseStateWithArrayOfObject />
      <br />
      <SharingComponentMain />
      <UseStateWithFunctions />
      <UseStateRandomNumber />
      <hr />
      {/* Todo List Using UseState */}
      <TodoList />
    </>
  );
};

export default App;
