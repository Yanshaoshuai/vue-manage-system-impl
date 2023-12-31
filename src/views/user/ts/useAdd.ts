import {ref} from "vue";
import UserInfo from "../../../interface/UserInfo";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import {addUserApi} from "../../../api/user";

function useAdd(){
    let userDetail = ref<UserInfo>(
        {
            username: "",
            password: "",
            roles: [],
            enabled: false
        }
    )
    let router = useRouter();
    const cancel = () => {
        router.go(-1);
    }

    function addUser() {
        addUserApi(userDetail.value).then(res => {
            ElMessage.success('添加成功');
            router.go(-1);
        });
    }

    const handleSubmit = () => {
        addUser()
    }
    return {userDetail,handleSubmit,cancel}
}

export default useAdd