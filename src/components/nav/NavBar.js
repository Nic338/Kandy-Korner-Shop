import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

export const NavBar = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    // created two higher order components to seperate the employee views from the customer views
    if(kandyUserObject.staff) {
        //return employeenav
        return <EmployeeNav />
    }
    else {
        //return customernav
        return <CustomerNav />
    }
}


