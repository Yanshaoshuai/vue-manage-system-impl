import {useRouter} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import PageReq from "../../../interface/PageReq";
import {ElMessage, ElMessageBox} from "element-plus";
import {deletePermissionByIdApi, getPermissionPageApi} from "../../../api/permission";

function useList(){
    const router = useRouter();
    onMounted(() => {
        getData();
    })
    const detail = (row: any) => {
        console.log(row.id)
        router.push(`/permission/edit/${row.id}`);
    }
    const pageTable = reactive({
        pageIndex: 1,
        pageSize: 10,
        pageTotal:0
    });
    const query=reactive({
        enabled:false,
        name:""
    })
    const tableData = ref([]);
// 获取表格数据
    const getData = () => {
        let pageReq: PageReq = {
            pageNumber: pageTable.pageIndex,
            pageSize: pageTable.pageSize
        }
        getPermissionPageApi(pageReq).then(res => {
            tableData.value = res.data.data.records;
            pageTable.pageTotal = res.data.data.total;
        });
    };

// 查询操作
    const handleSearch = () => {
        pageTable.pageIndex = 1;
        getData();
    };
// 分页导航
    const handlePageChange = (val: number) => {
        pageTable.pageIndex = val;
        getData();
    };
    const handleAdd = () => {
        router.push(`/permission/add`);
    }
// 删除操作
    const handleDelete = (index: number, row: any) => {
        // 二次确认删除
        ElMessageBox.confirm('确定要删除吗？', '提示', {
            type: 'warning'
        })
            .then(async () => {
                await deletePermissionByIdApi(row.id).then(res => {
                    if (res.data.data) {
                        ElMessage.success('删除成功');
                        tableData.value.splice(index, 1);
                    }
                })
            })
            .catch(() => {
            });
    };
    return {tableData,detail,query,pageTable,handleSearch,handlePageChange,handleAdd,handleDelete}
}
export default useList