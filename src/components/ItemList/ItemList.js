import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <>
            {products.map((product) => (
                <Item {...product} key={product.id}/>
            ))}
        </>
    )
}

export default ItemList