import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css"

export const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [topPrice, setTopPriceProducts] = useState(false)
    const [filteredProducts, setFiltered] = useState([])
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    const navigate = useNavigate()
//fetch call to get initial state of products
useEffect(() => {
        fetch(`http://localhost:8088/products?_sort=name&_order=asc&_expand=productType`)
        .then(response => response.json())
        .then((productArray) => {
            setProducts(productArray)
        })
    },
    []
)
useEffect(() => {
    if(kandyUserObject.staff) {
        setFiltered(products)
    }
},
[ products ]
)




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
                (product) => {
                    return <section className="location" key={`location--${product.id}`}>
                        <header>{product.name} ({product.productType.typeName})</header>
                        <footer>${product.price}</footer>

                    </section>
                }
            )
        }
    </article>


    </>


}