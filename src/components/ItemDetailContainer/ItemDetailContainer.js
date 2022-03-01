import {useEffect, useState} from 'react'
import {getProduct} from "../Mock/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()
    

    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [productId])
    console.log('hola')

    return (
        <div className="ItemDetailContainer" >
            <ItemDetail {...product} key={product.id}/>
        </div>
    )    
}
export default ItemDetailContainer
