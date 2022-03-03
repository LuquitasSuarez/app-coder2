import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getProduct} from "../Mock/products";
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


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  product={product}/>
        </div>
    )    
}
export default ItemDetailContainer