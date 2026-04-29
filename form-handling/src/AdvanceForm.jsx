import { useState } from "react";

const AdvanceForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    agree: false,
    country: "Pakistan",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form with Checkbox, Radio and Select</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>

      <br />

      <label>
        Country:
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="pakistan">Pakistan</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>
      </label>

      <br />
      <label>
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        I agree to the terms and conditions
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default AdvanceForm;
