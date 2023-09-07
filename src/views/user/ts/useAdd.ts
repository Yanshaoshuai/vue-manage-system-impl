import {ref} from "vue";
import UserInfo from "../../../interface/UserInfo";
import {useUsersStore} from "../../../store/users";
import {useRouter} from "vue-router";
import {addUserApi} from "../../../api";
import {ElMessage} from "element-plus";

function useAdd(){
    let userDetail = ref<UserInfo>(
        {
            username: "",
            password: "",
            roles: [],
            enabled: false
        }
    )
    let usersStore = useUsersStore();
    let router = useRouter();
    const cancel = () => {
        router.go(-1);
    }

    function addUser() {
        addUserApi(userDetail.value).then(res => {
            console.log(res.data.data)
            usersStore.addUser(userDetail.value)
        });
        ElMessage.success('添加成功');
        router.go(-1);
    }

    const handleSubmit = () => {
        addUser()
    }
    return {userDetail,handleSubmit,cancel}
}

export default useAdd