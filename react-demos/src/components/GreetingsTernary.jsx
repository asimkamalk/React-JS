const GreetingsTernary = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h1>Good Morning</h1>
  ) : (
    <h1>Good Afternoon</h1>
  );
};
export default GreetingsTernary;
