import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Sayid',
      major: 'Computer Science',
    },
    {
      id: 2,
      name: 'Sun-Hwa',
      major: 'Data Science',
    },
  ]);

  const addStudent = student => {
    // Check if the user forgot to enter a name
    if (!student.name) {
      return;
    }
    // Create id variable for new student
    let id;

    // If there are any entries in the students array already
    if (students.length) {
      // Create array of all ids currently assigned to students
      const ids = students.map(s => s.id);

      // Sort array so that highest number is last
      ids.sort((a, b) => a - b);

      // Store highest number, plus 1, in id variable
      id = ids[ids.length - 1] + 1;
    } else {
      // If students array is empty, assign new student an id of 1
      id = 1;
    }

    // We use the spread operator to fill in the details from the student object that was passed while adding the new `id`
    const newStudent = { ...student, id };

    // Update state with the students array with the newStudent
    setStudents([...students, newStudent]);
  };

  const removeStudent = id => {
    const newStudentsList = students.filter(student => student.id !== id);

    setStudents(newStudentsList);
  };

  // List of options for the student major
  const majors = [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ];

  // The value prop expects an initial state object
  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, majors }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </StudentContext.Provider>
  );
};