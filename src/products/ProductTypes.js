export const Types = ({types, product, selectList}) => {
    return (
        <>
        <select id="type"
            value={
                product.productTypeId
            }
            onChange={
                event => selectList(event)
            }>
                <option value="0">Select a Candy Type</option>

                {
                    types.map(type => {
                        return <option key={type.id} value={type.id}>
                            {type.typeName}
                        </option>
                    })
                }
            </select>
        </>
    )
}