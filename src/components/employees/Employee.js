// import { Link } from "react-router-dom"
import "./employees.css"

export const Employee = ({employeeObject, getAllEmployees}) => {
   
const FireEmployee = () => {
    return <button onClick={() => {
        fetch(`http://localhost:8088/users/${employeeObject.userId}`, {
            method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isStaff: false
                })
        })
        .then(fetch(`http://localhost:8088/employees/${employeeObject.id}`, {
                method: "DELETE"
            }))
        .then(() => {
            getAllEmployees()
        })
    }}>Fire Employee</button>
 }

    //this is built by the EmployeeList component
    
    return <section className="employee" key={employeeObject.id}>
    <header className="employee__header">{employeeObject?.user?.name}</header>
<div>Start Date:  {employeeObject?.startDate}</div>
<div>Pay Rate:  {employeeObject?.payRate}</div>
    <footer className="employee__footer">Currently working at {employeeObject?.location?.address}</footer>
    {FireEmployee()}
    </section>
}


// WE DONT NEED THIS FOR THIS EXERCISE
// I LIED I EVENTUALLY DID NEED THIS