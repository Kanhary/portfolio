import axios from 'axios';

const request = axios.create({
    baseURL: 'http://192.168.168.14:8888',
    withCredentials: false,
    timeout: 30000 
})

axios.defaults.headers['Content-Type'] = 'application/json;chatset=utf-8'
request.interceptors.response.use((response) => {
    console.log(response.data)
    let {msg,code} = response.data
    console.log("code=====>",code,'msg====>',msg);
    if(code == null) {
        return response;
    }else if(code == 200) {
        return response;
    }
    return Promise.reject(msg);
},(error) => {
    return Promise.reject(error);
})

export default request;