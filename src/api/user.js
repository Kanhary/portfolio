// import request from '../utils/requst.js'
import request from '@/utils/requst'

export function AddUser(data) {
    console.log(data);
    return request({
        method: "POST",
        url: '/user/add',
        data: data
    });
}

export function GetUser(params) {  // Changed `data` to `params`
    console.log(params);
    return request({
        method: "GET",
        url: '/user/allusersystem',
        params: params  // Use `params` for query parameters in GET requests
    });
}

export function UpdateUser(data) {
    return request({
        method: "POST",
        url: '/user/updateusersystem',
        data: data
    });
}
