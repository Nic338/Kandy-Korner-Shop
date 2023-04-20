import { createNewPurchaseData } from "../components/ApiManager"

export const Product = ({currentUser, productObject}) => {

const orderButton = () => {
    if (!currentUser.staff) {
        return <button onClick={
            () => {
                createNewPurchaseData(currentUser, productObject)
                .then(() => {

                })
            }
        }> ORDER </button>
    }
}


    return <>

    <article className="products">
    {
           <section className="location" key={`product--${productObject.id}`}>
            <header>{productObject.name} ({productObject.productType.typeName})</header>
          <footer>
            ${productObject.price}
          {orderButton()}
          </footer>

            </section>
    }
        
    </article>
    </>
}