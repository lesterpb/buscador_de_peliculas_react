import axios from 'axios';

const axiosClient = axios.create({
    headers:{
        get: { 'Content-Type': 'application/json'},
        post: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        put: { 'Content-Type': 'application/json' },
        patch: { 'Content-Type': 'application/json'},
        delete: { 'Content-Type': 'application/json'},
    },
    transformRequest: [function (data) {
        // para transformar data de la peticion antes de hacer la solicitud
        data = JSON.stringify(data);
        return data;
    }],
    timeout: 10000
});

export default axiosClient;