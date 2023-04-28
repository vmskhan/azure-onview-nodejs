import axios from "axios";

const proxyAxios=axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});
export default proxyAxios;


// {
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
// }