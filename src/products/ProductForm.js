import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Types } from "./ProductTypes";

export const ProductForm = () => {
//default properties of the initial state of the object
    const [product, update] = useState({
        name: "",
        productTypeId: "",
        price: ""

    })
    const [productTypes, updateTypes] = useState([])
    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
//new object to send to the api
        const productToSendToAPI = {
            name: product.name,
            productTypeId: product.productTypeId,
            price: product.price
        }

        return fetch(`http://localhost:8088/products`,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.JSON)
            .then(() => {
                navigate("/products")
            })
    }
    useEffect(
        () => {
            fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then(data => {
                updateTypes(data)
            })
        }
    )
    const selectList = (event) => {
        const copy = {...product}
        copy.productTypeId = event.target.value
        update(copy)
    }

    return (
        <form className="productForm">
            <h2 className="productForm_title">New Product Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of new product"
                        value={product.name}
                        onChange={(event) => {
                            const copy = {...product}
                            copy.name = event.target.value
                            update(copy)
                        }
                    }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label  htmlFor="type">Product Type</label>
                    {/* <input 
                        type="text"
                        className="form-control"
                        placeholder="TypeId of new product"
                        value={product.productTypeId}
                        onChange={(event) => {
                            const copy = {...product}
                            copy.productTypeId = event.target.value
                            update(copy)
                        }
                    } /> */}
                    {<Types types={productTypes} product={product} selectList={selectList} />}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label  htmlFor="price">Product Price</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Price of new product"
                        value={product.price}
                        onChange={(event) => {
                            const copy = {...product}
                            copy.price = event.target.value
                            update(copy)
                        }
                    } />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}