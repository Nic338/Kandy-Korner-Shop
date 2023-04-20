export const getCustomerDetails = (customerId) => {
    return fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
    .then(response => response.json())
}
export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/users?isStaff=false`)
    .then(response => response.json())
}
export const getProductsSortedWithDetails = () => {
    return fetch(`http://localhost:8088/products?_sort=name&_order=asc&_expand=productType`)
    .then(response => response.json())
}
export const changeEmployeeToUser = (employeeObject) => {
    return fetch(`http://localhost:8088/users/${employeeObject.userId}`, {
        method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isStaff: false
            })
    })
}
export const deleteEmployeeData = (employeeObject) => {
    return fetch(`http://localhost:8088/employees/${employeeObject.id}`, {
        method: "DELETE"
    })
}
export const getAllUsers = () => {
    return fetch(`http://localhost:8088/users`)
    .then(dirtyUsers => dirtyUsers.json())
}
export const createNewUser = (userToSendToAPI) => {
    return fetch(`http://localhost:8088/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userToSendToAPI)
    })
        .then(response => response.JSON)
}
export const createNewEmployee = (employeeToSendToAPI) => {
    return fetch(`http://localhost:8088/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeToSendToAPI)
    })
        .then(response => response.JSON)
}
export const getAllEmployeesWithLocationAndDetails = () => {
    return fetch(`http://localhost:8088/employees?_expand=location&_expand=user`)
    .then(response => response.json())
}
export const getPurchasesWithDetails = () => {
    return fetch(`http://localhost:8088/purchases?_expand=product`)
    .then(response => response.json())
}
export const getCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
    .then(response => response.json())
}
export const updateCustomerInfo = (customerProfile) => {
    return fetch(`http://localhost:8088/customers/${customerProfile.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: customerProfile.id,
            userId: customerProfile.userId,
            loyaltyNumber: customerProfile.loyaltyNumber
        })
    })
    .then(response => response.json())
}
export const getLocations = () => {
    return fetch(`http://localhost:8088/locations`)
    .then(response => response.json())
}
export const getProductsSorted = () => {
    return fetch(`http://localhost:8088/products?_sort=name&_order=asc`)
    .then(response => response.json())
}
export const createNewPurchaseData = (currentUser, productObject) => {
    return fetch(`http://localhost:8088/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            customerId: currentUser.id,
            productId: productObject.id,
            quantity: 1
        })
    })
    .then(response => response.json())
}
export const createNewProductData = (productToSendToAPI) => {
    return fetch(`http://localhost:8088/products`,  {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productToSendToAPI)
    })
        .then(response => response.JSON)
}
export const getProductTypes = () => {
    return fetch(`http://localhost:8088/productTypes`)
    .then(response => response.json())
}