import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import "./customers.css"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
     const [customers, setCustomers] = useState([])


     useEffect(
        () => {
            getAllCustomers()
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },[]
     )

return <article className="customers">
{
    customers.map(customer => <Customer key={`customer--${customer.id}`}
    id={customer.id}
    name={customer.name}
    email={customer.email}/>)
}
</article>


}