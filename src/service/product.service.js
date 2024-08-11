import axios from "axios"

export const getProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
}

export const getProductById = (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
}