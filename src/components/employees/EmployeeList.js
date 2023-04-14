import { useState, useEffect } from "react"
import { Employee } from "./Employee"
import "./employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
        fetch(`http://localhost:8088/employees?_expand=location&_expand=user`)
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
    },[]
    )
    return <article className="employees">
        {
            //the key needs to be where you are rendering multiple components
            //the props are what im pulling out of the employeeArray
            employees.map(employee => {
                return <section className="employee" key={employee.id}>
                    <header className="employee__header">{employee?.user?.name}</header>
                <div>Start Date:  {employee?.startDate}</div>
                <div>Pay Rate:  {employee?.payRate}</div>
                    <footer className="employee__footer">Currently working at {employee?.location?.address}</footer>
                    </section>
            }
        )}
    
    </article>
}