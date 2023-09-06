import {defineStore} from 'pinia';
import UserInfo from "../interface/UserInfo";

export const useUsersStore = defineStore('users', {
    state: () => {
        let users: UserInfo[]=[];
        return {
            users,
        };
    },
    actions: {
        addUser(user: UserInfo) {
            this.users.push(user);
        },
        removeById(id: number) {
            this.users = this.users.filter(item => item.id !== id);
        },
        updateById(user: UserInfo) {
            this.users = this.users.filter(item => item.id!==user.id);
            this.users.push(user)
        }
    }
});
