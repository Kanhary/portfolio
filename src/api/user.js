// import request from '../utils/requst.js'
import request from '@/utils/requst'

export function AddUser(data) {
    console.log(data);
    return request({
        method: "POST",
        url: '/userSystem/addUser ',
        data: data
    });
}

export function GetUser(params) {  
    console.log(params);
    return request({
        method: "GET",
        url: '/userSystem/getByUser/USER-0001',
        params: params  
    });
}

export function GetEmp(params) {
    console.log(params);
    return request({
        method: "GET",
        url: '/staffs/getSelectEpm',
        params: params
    });
}

export function UpdateUser(data) {
    return request({
        method: "POST",
        url: '/user/updateusersystem',
        data: data
    });
}
