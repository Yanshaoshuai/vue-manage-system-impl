import RoleInfo from "./RoleInfo";

interface UserInfo {
    id?:number;
    username: string;
    password: string;
    enabled: boolean;
    roles:RoleInfo[];
}
export default UserInfo