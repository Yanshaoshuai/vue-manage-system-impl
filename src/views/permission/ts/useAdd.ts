import {ref} from "vue";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import PermissionInfo from "../../../interface/PermissionInfo";
import {addPermissionApi} from "../../../api/permission";

function useAdd(){
    let permissionDetail = ref<PermissionInfo>(
        {
            name: "",
            url:"",
            method: "GET",
            desc:""
        }
    )
    let router = useRouter();
    const cancel = () => {
        router.go(-1);
    }

    function addPermission() {
        addPermissionApi(permissionDetail.value).then(res => {
            ElMessage.success('添加成功');
            router.go(-1);
        });
    }

    const handleSubmit = () => {
        addPermission()
    }
    return {permissionDetail,handleSubmit,cancel}
}

export default useAdd