<script setup lang="ts">

import {Delete, Edit, Search, Plus} from '@element-plus/icons-vue';
import useList from "./ts/useList";

let {tableData,query,pageTable,detail,handleSearch,handlePageChange,handleAdd,handleDelete}=useList();

</script>

<template>
  <div class="handle-box">
    <!--<el-select v-model="query.enabled" placeholder="地址" class="handle-select mr10">-->
    <!--  <el-option key="1" label="广东省" value="广东省"></el-option>-->
    <!--  <el-option key="2" label="湖南省" value="湖南省"></el-option>-->
    <!--</el-select>-->
    <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
    <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
    <el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
  </div>
  <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
    <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
    <el-table-column prop="name" label="角色名"></el-table-column>
    <el-table-column prop="description" label="描述"></el-table-column>
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
        :current-page="pageTable.pageIndex"
        :page-size="pageTable.pageSize"
        :total="pageTable.pageTotal"
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