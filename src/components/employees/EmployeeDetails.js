// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"


// WE DONT NEED THIS FOR THIS EXERCISE

// export const EmployeeDetails = () => {
//     // employeeId is the state we are getting from the Route in EmployeeViews
//     //useParams grabs the employeeId out of the URL so you can use it in the fetch call to get the rest of the Details for the employee of which you clicked on
//     const {employeeId} = useParams()
//     const [employee, updateEmployee] = useState()

//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/employees?_expand=user&userId=${employeeId}`)
//             .then(response => response.json())
//             .then((data) => {
//                 const singleEmployee = data[0]
//                 updateEmployee(singleEmployee)
//             })
//         },
//         [employeeId]
//     )
// // updated JSX to render all the properties you grabbed from the fetch call with the useParams()
//     return <section className="employee">
//     <header className="employee__header">{employee?.user?.name}</header>
//     <div>Email:{employee?.startDate}</div>
//     <div>Rate:{employee?.payRate}</div>
//     <footer className="employee__footer">Currently working at {employee?.locationId?.address}</footer>
// </section>
// }