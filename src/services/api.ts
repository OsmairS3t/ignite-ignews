import axios from 'axios'

export const api = axios.create({
    //seria http://localhost:3000/api porem o axios vai identificar essa rota por causa do nextjs
    baseURL: '/api'
})