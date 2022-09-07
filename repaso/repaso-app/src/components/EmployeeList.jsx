import * as React from "react";

const EmployeeList = (props) => {

  const employees = [
    { name: "Alex" },
    { name: "Alan" },
    { name: "Cristian" },
    { name: "Luis" },
  ];

  return (
    <React.Fragment>
      <h3>ATOS Employees</h3>
      {employees.length === 0 && <p>No employees</p>}
      {employees.length > 0 &&
        employees.map((employee, key) => {
          return <p className="employee-card" key={key}>{employee.name}</p>;
        })}
    </React.Fragment>
  );
};

// {
//   data1.map((item, key) => {
//     return (
//       <tr key={key}>
//         <td>{item.heading}</td>
//         <td>{item.date}</td>
//         <td>{item.status}</td>
//       </tr>
//     );
//   });
// }

export default EmployeeList;
