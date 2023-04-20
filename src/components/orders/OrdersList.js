import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
import { Order } from "./Order"
import { getPurchasesWithDetails } from "../ApiManager"


export const OrderList = () => {

const [orders, setOrders] = useState([])
const [filteredOrders, setFilteredOrders] = useState([])
const localKandyUser = localStorage.getItem("kandy_user")
const kandyUserObject = JSON.parse(localKandyUser)
// const {customerId} = useParams()

useEffect(
    () => {
    getPurchasesWithDetails()
    .then((orderArray) => {
        setOrders(orderArray)
    })    
    },[]
)
useEffect(
    () => {
        const myOrders = orders.filter(order => order.customerId === kandyUserObject.id)
        setFilteredOrders(myOrders)
    },[orders]
)

return <>
<h2>My Orders</h2>
<article className="orders">
{
    filteredOrders.map(
        (order) => <Order key={`order--${order.id}`} orderObject={order}/>
    )
}
</article>

</>


}