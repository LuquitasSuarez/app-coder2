import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../Mock/products'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams ()
    
    useEffect(() => {
        getProducts(categoryId).then(item => {
            setProducts(item)
        }).catch(error  => {
            console.log(error)
        })   
    }, [categoryId])
    
    return (
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )    
    
}

export default ItemListContainer