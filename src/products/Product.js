export const Product = ({currentUser, productObject}) => {

const orderButton = () => {
    if (!currentUser.staff) {
        return <button onClick={
            () => {
                fetch(`http://localhost:8088/purchases`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        customerId: currentUser.id,
                        productId: productObject.id,
                        quantity: 1
                    })
                })
                .then(response => response.json())
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