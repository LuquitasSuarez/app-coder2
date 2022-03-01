import { Link } from "react-router-dom"
import { products } from "../Mock/products"

const Item = ({img, name, price, stock}) => {
    return(
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <p className="card-text">stock: {stock}</p>
                    <Link to={`/detail/${products.id}`}>Ver detalle</Link>
                </div>
            </div>
        </>
    )
}

export default Item