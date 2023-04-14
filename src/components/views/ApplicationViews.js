import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
    
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    // created two higher order components to seperate the employee views from the customer views
    if(kandyUserObject.staff) {
        //return employeeviews
        return <EmployeeViews />
    }
    else {
        //return customerviews
        return <CustomerViews />
    }
}
