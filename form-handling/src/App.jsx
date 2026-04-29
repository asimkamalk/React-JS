import SimpleForm from "./SimpleForm";
import MultiInputForm from "./MultiInputForm";
import AdvanceForm from "./AdvanceForm";
import UncontrolledForm from "./uncontrolledForm";
import BasicFormValidation from "./BasicFormValidation";
function App() {
  return (
    <>
      <SimpleForm />
      <br />
      <MultiInputForm />
      <br />
      <AdvanceForm />
      <UncontrolledForm />
      <BasicFormValidation />
    </>
  );
}

export default App;
