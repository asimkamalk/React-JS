import { useState } from "react";

const Student = () => {
  const initialStudent = {
    name: "Asim Kamal",
    grade: "A",
    city: "Peshawar",
  };
  const [student, setStudent] = useState(initialStudent);

  const chnageCity = () => setStudent({ ...student, city: "Lahore" });

  // Reset to the original initialStudent values
  const resetStudent = () => setStudent(initialStudent);

  return (
    <div>
      <h2>Name : {student.name}</h2>
      <p>Grade : {student.grade}</p>
      <p>City : {student.city}</p>

      <button onClick={chnageCity}>Change City</button>
      <button onClick={resetStudent}>Reset Student</button>
    </div>
  );
};
export default Student;
