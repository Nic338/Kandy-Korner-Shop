export const Order = ({orderObject}) => {



return <section className="order" key={`order--${orderObject.id}`}>
    <header className="order__header">

    </header>
    <section>{orderObject?.product?.name}</section>
    <section>{orderObject?.product?.price}</section>
    
</section>
}