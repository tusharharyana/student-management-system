import { useState } from "react";

function App() {

  const [students, setStudents] = useState([]);

  const getStudents = async () => {

    const response = await fetch(
      "http://localhost:8080/students"
    );

    const data = await response.json();

    setStudents(data);
  };

  const getBCAStudents = async () => {

    const response = await fetch( "http://localhost:8080/students/bca");
    const data = await response.json();

    setStudents(data);
  };

  return (
    <div style={{ padding: "40px" }}>

      <button onClick={getStudents}>
        Get Students
      </button>

      <button onClick={getBCAStudents}>
         Show BCA students
      </button>

      <ul>
        {students.map(student => (
          <li key={student.id}>
              {student.name} - {student.course}
          </li>
        ))}
      </ul>


    </div>
  );
}

export default App;