import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://:192.168.0.88/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export { ApiDelivery }