import { useState } from "react"
import { ProductSearch } from "./ProductSearch"
import { ProductList } from "./ProductList"
import { FoundProducts } from "./FoundProducts"

//parent container for product search and product list
export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")


return <>

<ProductSearch setterFunction={setSearchTerms} />

<FoundProducts searchTermState={searchTerms} />

</>


}