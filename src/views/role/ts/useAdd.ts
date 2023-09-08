import {ref} from "vue";
import {useRouter} from "vue-router";
import {ElMessage} from "element-plus";
import RoleInfo from "../../../interface/RoleInfo";
import {addRoleApi} from "../../../api/role";

function useAdd(){
    let roleDetail = ref<RoleInfo>(
        {
            name: "",
            description:"",
            permissions:[]
        }
    )
    let router = useRouter();
    const cancel = () => {
        router.go(-1);
    }

    function addUser() {
        addRoleApi(roleDetail.value).then(res => {
            ElMessage.success('添加成功');
            router.go(-1);
        });
    }

    const handleSubmit = () => {
        addUser()
    }
    return {roleDetail,handleSubmit,cancel}
}

export default useAdd