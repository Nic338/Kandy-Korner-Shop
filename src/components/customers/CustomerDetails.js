import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerDetails } from "../ApiManager"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState()

    useEffect(
        () => {
            getCustomerDetails(customerId)
            .then((data) => {
                //convert the data we get from the fetch above to be the employee's info that we see when we click on their specific name
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)
            })
        },[customerId]
    )
    //update JSX to show all of the expanded details we grabbed from the fetch above using useParams()
    return <section className="customer">
        <header className="customer__header">{customer?.user?.name}</header>
        <div>Email:{customer?.user?.email}</div>
        <footer className="customer__footer">Loyalty Number: {customer?.loyaltyNumber}</footer>

    </section>
}