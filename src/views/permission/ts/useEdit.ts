import {useRoute, useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import {onMounted, ref} from "vue";
import PermissionInfo from "../../../interface/PermissionInfo";
import {getPermissionByIdApi, updatePermissionByIdApi} from "../../../api/permission";

function useEdit() {
    let router = useRouter();
    let route = useRoute();
    let permissionDetail = ref<PermissionInfo>(
        {
            name: "",
            url:"",
            method: "GET",
            desc:""
        }
    )
    onMounted(() => {
        getPermissionDetail();
    })
    const getPermissionDetail = async () => {
        const updateId: number = Number(route.params.id);
        await getPermissionByIdApi(updateId).then(res => {
            permissionDetail.value = res.data.data;
        })
    }
    const updatePermission= () => {
        updatePermissionByIdApi(permissionDetail.value).then(res => {
            console.log(res.data.data)
        });
        ElMessage.success('修改成功');
        router.go(-1);
    }
    const cancel = () => {
        router.go(-1);
    }
    const handleSubmit = () => {
        updatePermission()
    }
    return {permissionDetail, handleSubmit,cancel}
}

export default useEdit