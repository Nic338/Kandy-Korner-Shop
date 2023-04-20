import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getCustomerDetails, getCustomers, updateCustomerInfo } from "../ApiManager"
export const EmployeeForm = () => {
    //initial state for profile
    const [customerProfile, updateCustomerProfile] = useState({
        loyaltyNumber: 0
    })
    const [loyaltyNumber, updateLoyaltyNumber] = useState([])
    const {customerId} = useParams()
    const navigate = useNavigate()
    useEffect(
        () => {
            getCustomerDetails(customerId)
            .then(data => {
                const customerObject = data[0]
                updateCustomerProfile(customerObject)
            })
        },[customerId]
    )

    const handleUpdateButtonClick = (event) => {
        event.preventDefault()

        // fetch call to update the loyaltyNumber of the given customer
       return getCustomers()
                .then((loyaltyNumber) => {
                    updateLoyaltyNumber(loyaltyNumber)
                })
                .then(updateCustomerInfo(customerProfile)
                    .then(() => {
                        navigate("/customers")
                    }))
        // return fetch(`http://localhost:8088/customers/${customerProfile.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         loyaltyNumber: customerProfile.loyaltyNumber
        //     })
        // })
        // .then(response => response.json())
        // .then(() => {
        //     navigate("/customers")
        // })
    }
    return (
        <>
        <form className="profile">
            <h2 className="profile__title">Update Loyalty Number</h2>
            <div className="form-group">
                <label htmlFor="customerName">Name:</label>
                <div>{customerProfile?.user?.name}</div>
            </div>
            <div className="form-group">
                <label htmlFor="customerEmail">Email:</label>
                <div>{customerProfile?.user?.email}</div>
            </div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="loyaltyNumber">Loyalty Number:</label>
                    <input type="number"
                        className="form-control"
                        value={customerProfile?.loyaltyNumber}
                        onChange={
                            (evt) => {
                                // TODO: Update phoneNumber property
                                const copy = {...customerProfile}
                                copy.loyaltyNumber = parseInt(evt.target.value)
                                updateCustomerProfile(copy)
                                // console.log(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleUpdateButtonClick(clickEvent)}
             className="btn btn-primary">Update Loyalty Number</button>
        </form>
        </>
    )
}