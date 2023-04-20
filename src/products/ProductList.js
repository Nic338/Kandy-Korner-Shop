import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css"
import { Product } from "./Product";
import { getProductsSortedWithDetails } from "../components/ApiManager";

export const ProductList = ({ searchTermState }) => {
    const [products, setProducts] = useState([])
    const [topPrice, setTopPriceProducts] = useState(false)
    const [filteredProducts, setFiltered] = useState([])
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    const navigate = useNavigate()

useEffect(() => {
    const searchedProducts =  products.filter(product => {
        return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
    })
    setFiltered(searchedProducts)
},
[searchTermState]
)




    //fetch call to get initial state of products
useEffect(() => {
        getProductsSortedWithDetails()
        .then((productArray) => {
            setProducts(productArray)
        })
    },
    []
)
// useEffect(() => {
//     if(kandyUserObject.staff) {
//         setFiltered(products)
//     }
// },
// [ products ]
// )




// useEffect to create a button to filter products that cost more than $2
useEffect(() => {
        if(topPrice) {
            const topPriceProducts = products.filter(product => product.price > 2.00)
            setFiltered(topPriceProducts)
        }
        else{
            setFiltered(products)
        }
},
    [topPrice, products]
)
return <>

    {
        kandyUserObject.staff ? <>
        <button onClick={ () => { setTopPriceProducts(true) } }>Top Price Products</button>
        <button onClick={ () => { setTopPriceProducts(false) } }>Show All</button>
        <button onClick={ () => navigate("/product/create")}>Create New Product</button>
        </>
        : <>
        <button onClick={ () => { setTopPriceProducts(true) } }>Top Price Products</button>
        <button onClick={ () => { setTopPriceProducts(false) } }>Show All</button>
        </>
    }


    <h2>List of Products</h2>

    <article className="products">
        {
            filteredProducts.map(
                (product) => <Product key={`product--${product.id}`} currentUser={kandyUserObject}
                productObject={product} />
            )
        }
    </article>


    </>


}