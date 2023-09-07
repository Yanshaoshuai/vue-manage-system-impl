<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue';
import {ElMessage, ElMessageBox} from 'element-plus';
import {Delete, Edit, Search, Plus} from '@element-plus/icons-vue';
import {deleteByIdApi, getUserPageApi} from '../../api';
import PageReq from "../../interface/PageReq";
import {useRouter} from "vue-router";
import {useUsersStore} from "../../store/users";

const router = useRouter();
let usersStore = useUsersStore();
onMounted(() => {
  getData();
})
const detail = (row: any) => {
  console.log(row.id)
  router.push(`/user/edit/${row.id}`);
}
const query = reactive({
  pageIndex: 1,
  pageSize: 10
});
const tableData = ref([]);
const pageTotal = ref(0);
// 获取表格数据
const getData = () => {
  let pageReq: PageReq = {
    pageNumber: query.pageIndex,
    pageSize: query.pageSize
  }
  getUserPageApi(pageReq).then(res => {
    tableData.value = res.data.data.records;
    pageTotal.value = res.data.data.total;
    usersStore.users = tableData.value;
  });
};

// 查询操作
const handleSearch = () => {
  query.pageIndex = 1;
  getData();
};
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val;
  getData();
};
const handleAdd = () => {
  router.push(`/user/add`);
}
// 删除操作
const handleDelete = (index: number, row: any) => {
  // 二次确认删除
  ElMessageBox.confirm('确定要删除吗？', '提示', {
    type: 'warning'
  })
      .then(async () => {
        await deleteByIdApi(row.id).then(res => {
          if (res.data.data) {
            ElMessage.success('删除成功');
            tableData.value.splice(index, 1);
          }
        })
      })
      .catch(() => {
      });
};

</script>

<template>
  <div class="handle-box">
    <el-select v-model="query.password" placeholder="地址" class="handle-select mr10">
      <el-option key="1" label="广东省" value="广东省"></el-option>
      <el-option key="2" label="湖南省" value="湖南省"></el-option>
    </el-select>
    <el-input v-model="query.username" placeholder="用户名" class="handle-input mr10"></el-input>
    <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
    <el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
  </div>
  <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
    <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
    <el-table-column prop="username" label="用户名"></el-table-column>
    <el-table-column prop="password" label="密码"></el-table-column>
    <el-table-column prop="enabled" label="是否激活"></el-table-column>
    <el-table-column label="操作" width="220" align="center">
      <template #default="scope">
        <el-button text :icon="Edit" @click="detail(scope.row)" v-permiss="15">
          编辑
        </el-button>
        <el-button text :icon="Delete" class="red" @click="handleDelete(scope.$index,scope.row)" v-permiss="15">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination">
    <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="query.pageIndex"
        :page-size="query.pageSize"
        :total="pageTotal"
        @current-change="handlePageChange"
    ></el-pagination>
  </div>

</template>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
}

.table {
  width: 100%;
  font-size: 14px;
}

.red {
  color: #F56C6C;
}

.mr10 {
  margin-right: 10px;
}

.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>