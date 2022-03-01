import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    const decrement = () => {
        if(count > initial ) {
            setCount(count - 1)
        } 
    }
    
    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    

    return(
    <>
        <h3 className='border border-3 rounded-pill w-25 p-3 h-25 d-inline-block'>Item Count</h3>
        <div className='container'>
            <div className='row justify-content-md-center'>
                <button className='col col-lg-2 btn btn-primary btn-sm' type="button" onClick={decrement}>-</button>
                <h3 className='col-md-auto'>{count}</h3>
                <button className='col col-lg-2 btn btn-primary btn-sm' type="button" onClick={increment}>+</button>
                <div>
                    <button className='border border-3 rounded-pill w-25 p-3 h-25 d-inline-block h6' onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ItemCount