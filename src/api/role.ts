import request from "../utils/request";
import UserInfo from "../interface/UserInfo";
import PageReq from "../interface/PageReq";
import RoleInfo from "../interface/RoleInfo";

export const getRolePageApi = (pageReq:PageReq) => {
    return request({
        url: `/api/role?pageNumber=${pageReq.pageNumber}&pageSize=${pageReq.pageSize}`,
        method: 'get'
    });
};
export const getRolesByNameApi= (name:string) => {
    return request({
        url: `/api/role/keyword?keyword=${name}`,
        method: "get"
    })
}
export const getRoleByIdApi= (id:number) => {
    return request({
        url: `/api/role/${id}`,
        method: 'get'
    });
}
export const updateRoleByIdApi= (roleInfo:RoleInfo) => {
    return request({
        url: `/api/role`,
        data:roleInfo,
        method: 'put'
    });
}
export const deleteRoleByIdApi= (id:number) => {
    return request({
        url: `/api/role/${id}`,
        method: 'delete'
    });
}
export const addRoleApi= (roleInfo:RoleInfo) => {
    return request({
        url: `/api/role`,
        data:roleInfo,
        method: 'post'
    });
}
