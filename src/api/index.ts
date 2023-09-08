import request from '../utils/request';
import LoginInfo from "../interface/LoginInfo";
import PageReq from "../interface/PageReq";
import UserInfo from "../interface/UserInfo";
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

