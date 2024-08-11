import axios from "axios"

export const authLogin = (data, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            callback(true, res)
        })
        .catch((error) => {
            callback(false, error);
        })
}