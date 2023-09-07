import request from '../utils/request';
import LoginInfo from "../interface/LoginInfo";
import PageReq from "../interface/PageReq";
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
export const useLoginApi = (user: LoginInfo) => {
    return request({
        url: '/api/login',
        method: "post",
        data: user
    })
}
export const useTestApi = () => {
    return request({
        url: '/test/hello',
        method: "get"
    })
}

export const getRolesByNameApi= (name:string) => {
    return request({
        url: `/api/role/keyword?keyword=${name}`,
        method: "get"
    })
}