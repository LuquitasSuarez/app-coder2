const ItemDetail = ({img, name, price, stock}) => {
    return(
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <p className="card-text">stock: {stock}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
