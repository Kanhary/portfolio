import request from '../utils/requst.js'

export function AddUser(data){
    return request({
        method: "POST",
        url: '/user/add',
        data: data
    })
}

export function CreateUser(data){
    return request({
        method: "POST",
        url: '/user/create',
        data: data
    })
}