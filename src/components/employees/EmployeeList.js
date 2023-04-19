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
const getAllEmployees = () => {
    fetch(`http://localhost:8088/employees?_expand=location&_expand=user`)
    .then(response => response.json())
    .then((employeeArray) => {
        setEmployees(employeeArray)
    })

}
   
    return <article className="employees">
        {
            //the key needs to be where you are rendering multiple components
            //the props are what im pulling out of the employeeArray
            employees.map(employee => <Employee key={`employee--${employee.id}`} 
            employeeObject={employee} 
            getAllEmployees={getAllEmployees}/>
        )}
    
    </article>
}