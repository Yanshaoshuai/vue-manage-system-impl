import {useRoute, useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import {onMounted, ref} from "vue";
import UserInfo from "../../../interface/UserInfo";
import {getUserDetailByIdApi, updateByIdApi} from "../../../api/user";

function useEdit() {
    let router = useRouter();
    let route = useRoute();
    let userDetail = ref<UserInfo>(
        {
            username: "",
            password: "",
            roles: [],
            enabled: false
        }
    )
    onMounted(() => {
        getUserDetail();
    })
    const getUserDetail = async () => {
        const updateId: number = Number(route.params.id);
        await getUserDetailByIdApi(updateId).then(res => {
            userDetail.value = res.data.data;
            console.log(userDetail.value.roles)
        })
    }
    const updateUser = () => {
        updateByIdApi(userDetail.value).then(res => {
            console.log(res.data.data)
        });
        ElMessage.success('修改成功');
        router.go(-1);
    }
    const cancel = () => {
        router.go(-1);
    }
    const handleSubmit = () => {
        updateUser()
    }
    return {userDetail, handleSubmit,cancel}
}

export default useEdit