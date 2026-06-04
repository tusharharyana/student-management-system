import { useState } from "react";

function App(){
    
    // {"id":1,"name":"John Doe","course":"Computer Science"}

    const [student, setStudent] = useState(null);

    const getStudent = async () => {

            const response = await fetch('http://localhost:8080/students');
            const data = await response.json();
            setStudent(data);

    }

    return (
        <div>

            <button onClick={getStudent}>
                Fetch Student
            </button>

            <br />
            <h1>Here will be student data:</h1>

            <h1>{student?.name}</h1>
            <h2>{student?.course}</h2>
            <h3>{student?.id}</h3>

        </div>
    )
}

export default App;