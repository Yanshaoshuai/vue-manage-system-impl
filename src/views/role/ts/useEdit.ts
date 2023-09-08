import {useRoute, useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import {onMounted, ref} from "vue";
import RoleInfo from "../../../interface/RoleInfo";
import {getRoleByIdApi, updateRoleByIdApi} from "../../../api/role";

function useEdit() {
    let router = useRouter();
    let route = useRoute();
    let roleDetail = ref<RoleInfo>(
        {
            name: "",
            description:"",
            permissions:[]
        }
    )
    onMounted(() => {
        getRoleDetail();
    })
    const getRoleDetail = async () => {
        const updateId: number = Number(route.params.id);
        await getRoleByIdApi(updateId).then(res => {
            roleDetail.value = res.data.data;
        })
    }
    const updateUser = () => {
        updateRoleByIdApi(roleDetail.value).then(res => {
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
    return {roleDetail, handleSubmit,cancel}
}

export default useEdit