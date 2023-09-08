import PermissionInfo from "./PermissionInfo";

interface RoleInfo {
    id?:number;
    permissions:PermissionInfo[];
    name: string;
    pid?: string;
    description: string;
}
export default RoleInfo