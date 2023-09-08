import request from "../utils/request";
import PageReq from "../interface/PageReq";
import PermissionInfo from "../interface/PermissionInfo";

export const getPermissionByNameApi= (name:string) => {
    return request({
        url: `/api/permission/keyword?keyword=${name}`,
        method: "get"
    })
}
export const getPermissionPageApi = (pageReq:PageReq) => {
    return request({
        url: `/api/permission?pageNumber=${pageReq.pageNumber}&pageSize=${pageReq.pageSize}`,
        method: 'get'
    });
};

export const getPermissionByIdApi= (id:number) => {
    return request({
        url: `/api/permission/${id}`,
        method: 'get'
    });
}
export const updatePermissionByIdApi= (permission:PermissionInfo) => {
    return request({
        url: `/api/permission`,
        data:permission,
        method: 'put'
    });
}
export const deletePermissionByIdApi= (id:number) => {
    return request({
        url: `/api/permission/${id}`,
        method: 'delete'
    });
}
export const addPermissionApi= (permission:PermissionInfo) => {
    return request({
        url: `/api/permission`,
        data:permission,
        method: 'post'
    });
}