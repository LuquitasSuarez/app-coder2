/*
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
    
    const handleOnAdd = (count) => {
        console.log(`Se agregaron ${count} productos al carrito`)
    }

    return(
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={product?.img} className="card-img-top" alt={product?.name}/>
                <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <p className="card-text">${product?.price}</p>
                    <p className="card-text">{product?.description}</p>
                </div>
                <ItemCount stock={product?.stock} initial={1} onAdd={handleOnAdd}/>
            </div>
        </>
    )
}

export default ItemDetail
*/
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react' 
import { NavLink } from 'react-router-dom' 



const ItemDetail = ({product}) => {
    const [count, setCount] = useState(0);

    const onAdd = (count) => {
        if(count > 0){
            setCount(count);
        }
    }

    return(
        <>
        <div className="card" style={{width: '18rem'}}>
            <img src={product?.img} className="card-img-top" alt={product?.name}/>
            <div className="card-body">
                <h5 className="card-title">{product?.name}</h5>
                <p className="card-text">${product?.price}</p>
                <p className="card-text">{product?.description}</p>
            </div>
            {count ?  <NavLink to="/cart"> <button className="button_finish">Finalizar Compra</button> </NavLink> : <ItemCount stock={product?.stock} initial={1} onAdd={onAdd}/>}
        </div>
    </>
    );
}

export default ItemDetail