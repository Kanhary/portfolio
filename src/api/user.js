// import request from '../utils/requst.js'
import request from '@/utils/requst'
import axios from 'axios';

export function AddUser(data) {
    console.log(data);
    return request({
        method: "POST",
        url: '/userSystem/addUser',
        data: data
    });
}

export function GetUser(params) {  
    console.log(params);
    return request({
        method: "GET",
        url: '/userSystem/getAllUser',
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

export function UpdateUser(id, data) {
    return request({
        method: 'POST',
        url: `/userSystem/updateUser/${id}`,
        data: data
    });
}

export function CheckUser(data) {
    return request({
        method: 'POST',
        url: '/userSystem/checkusers',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export function DeleteUser(ID) {
    return request({
        method: 'POST',
        url: `/userSystem/delete/${ID}`,
    });
}

export function Login(){
    return request({
        method: 'POST',
        url: 'userSystem/login'
    })
}

