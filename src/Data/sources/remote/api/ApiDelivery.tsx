import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: '',
    headers:{
        'Content-Type': 'application/json'
    }
})

export { ApiDelivery }
