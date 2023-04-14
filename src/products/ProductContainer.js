import { useState } from "react"
import { ProductSearch } from "./ProductSearch"
import { ProductList } from "./ProductList"

//parent container for product search and product list
export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")


return <>

<ProductSearch setterFuction={setSearchTerms} />
<ProductList searchTermState={searchTerms} />

</>


}