import {useState} from 'react'
import './ItemCount.css'

/*
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
    }*/
const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const decrement = () => {
        if(count > 1){
        setCount(count - 1);
        }
    }
    
    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    
    return(
    <>
        <div className='container'>
            <div className='row justify-content-md-center'>
                <button className='col col-lg-2 btn btn-primary btn-sm' type="button" onClick={decrement}>-</button>
                <label className='col-md-auto'>{count}</label>
                <button className='col col-lg-2 btn btn-primary btn-sm' type="button" onClick={increment}>+</button>
                <div className='div'>
                    <button className='div_button' onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ItemCount
/*
import React from "react";
import {useState} from "react";
import './_ItemCount.scss';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrement = () => {

    if(count > 1){
      setCount(count - 1);

    }
  }

  const increment = () => {
    if(count < stock){
      setCount(count + 1);
    }
    
  }

  return(
    <>
      <div className="counter-button">
        <button className="boton--secundario" onClick={decrement}>-</button>
        <label>{count}</label>
        <button className="boton--secundario" onClick={increment}>+</button>
      </div>
      
      <button className="boton boton--primario" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );

}

export default ItemCount;
*/