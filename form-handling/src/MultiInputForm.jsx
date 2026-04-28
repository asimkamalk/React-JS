import { useState } from "react";

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Multi Input Form</h2>
      <label>Name: </label>
      <input
        name="name"
        type="text"
        value={formData.name}
        placeholder="Your name"
        onChange={handleChange}
      />
      <br />
      <label>Email: </label>
      <input
        name="email"
        type="email"
        value={formData.email}
        placeholder="Your email"
        onChange={handleChange}
      />
      <br />
      <label>Age: </label>
      <input
        name="age"
        type="number"
        value={formData.age}
        placeholder="Your age"
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default MultiInputForm;
