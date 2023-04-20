
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createNewEmployee, createNewUser, getAllUsers } from "../ApiManager"


export const EmployeeForm = () => {
    let [userArray, setUserArray] = useState([])
    let [user, update] = useState({
        name: "",
        email: ""
    })

    const [employee, updateEmployee] = useState({
        startDate: "",
        payRate: "",
        locationId: "",
        userId: 0
    })

    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)


useEffect(
    () => {
        getAllUsers()
.then((cleanUsers) => {setUserArray(cleanUsers)})
}
)

    const handleUserSaveButtonClick = (event) => {
        event.preventDefault()

        const userToSendToAPI = {
            name: user?.name,
            email: user?.email,
            isStaff: true
        }

        return createNewUser(userToSendToAPI)

    }

    const handleEmployeeSaveButtonClick = (event) => {
        event.preventDefault()

   const newUser = userArray.length + 1
        const employeeToSendToAPI = {
            userId: newUser,
            startDate: new Date().toISOString().split('T')[0],
            payRate: parseInt(employee.payRate),
            locationId: parseInt(employee.locationId)
        }

        return createNewEmployee(employeeToSendToAPI)
            .then(() => {
                navigate("/employees")
            })
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm_title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of new employee"
                        value={user?.name}
                        onChange={(event) => {
                            const copy = {...user}
                            copy.name = event.target.value
                            update(copy)
                        }
                    }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label  htmlFor="email">Employee Email</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Email of new employee"
                        value={user?.email}
                        onChange={(event) => {
                            const copy = {...user}
                            copy.email = event.target.value
                            update(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label  htmlFor="startDate">Start Date</label>
                    <input 
                        type="date"
                        className="form-control"
                        placeholder="Start date of employee"
                        value={employee?.startDate}
                        onChange={(event) => {
                            const copy = {...employee}
                            copy.startDate = event.target.value
                            updateEmployee(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label  htmlFor="payRate">Pay Rate</label>
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="Pay rate of new employee"
                        value={employee?.payRate}
                        onChange={(event) => {
                            const copy = {...employee}
                            copy.payRate = event.target.value
                            updateEmployee(copy)
                        }
                    } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label  htmlFor="location">Location</label>
                    <input 
                        type="number"
                        className="form-control"
                        placeholder="LocationId of new employee"
                        value={employee?.locationId}
                        onChange={(event) => {
                            const copy = {...employee}
                            copy.locationId = event.target.value
                            updateEmployee(copy)
                        }
                    } />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleUserSaveButtonClick(clickEvent)
             .then(handleEmployeeSaveButtonClick(clickEvent))}
            className="btn btn-primary">
                Submit New Hire
            </button>
        </form>
    )
}