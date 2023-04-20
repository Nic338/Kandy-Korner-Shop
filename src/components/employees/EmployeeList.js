import { useState, useEffect } from "react"
import { Employee } from "./Employee"
import "./employees.css"
import { getAllEmployeesWithLocationAndDetails } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
        getAllEmployeesWithLocationAndDetails()
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
    },[]
    )
const getAllEmployees = () => {
    getAllEmployeesWithLocationAndDetails()
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