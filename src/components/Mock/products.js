export const products = [
    { id: 1, name: 'iphone 12', price: 'usd 1000', category: 'celular', img:'./img/celular.jpg', stock: 25, description:'Descripcion de Iphone 12'},
    { id: 2, name: 'Ipad 8va generacion', price: 'usd 800', category: 'tablet', img:'./img/tablet.jpg', stock: 16, description:'Descripcion de Ipad'},
    { id: 3, name: 'Macbook pro', price: 'usd 1200', category: 'computadora', img:'./img/computadora.jpg', stock: 10, description:'Descripcion de Macbook'}
]

export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 1000)

})
export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}