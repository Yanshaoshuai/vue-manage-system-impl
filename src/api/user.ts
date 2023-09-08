import PageReq from "../interface/PageReq";
import request from "../utils/request";
import UserInfo from "../interface/UserInfo";

export const getUserPageApi = (pageReq:PageReq) => {
    return request({
        url: `/api/user?pageNumber=${pageReq.pageNumber}&pageSize=${pageReq.pageSize}`,
        method: 'get'
    });
};

export const getUserDetailByIdApi= (id:number) => {
    return request({
        url: `/api/user/${id}`,
        method: 'get'
    });
}
export const updateByIdApi= (user:UserInfo) => {
    return request({
        url: `/api/user`,
        data:user,
        method: 'put'
    });
}
export const deleteByIdApi= (id:number) => {
    return request({
        url: `/api/user/${id}`,
        method: 'delete'
    });
}
export const addUserApi= (user:UserInfo) => {
    return request({
        url: `/api/user`,
        data:user,
        method: 'post'
    });
}

