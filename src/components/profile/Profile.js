import { CustomerForm } from "./CustomerForm"
import { EmployeeForm } from "./EmployeeForm"

export const Profile = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    // created two higher order components to seperate the employee views from the customer views
    if(kandyUserObject.staff) {
        
        return <EmployeeForm />
    }
    
    else {
        
        return ""
    }
}