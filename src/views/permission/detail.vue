<template>
  <el-form :model="permissionDetail" label-width="120px">
    <el-form-item label="权限名">
      <el-input v-model="permissionDetail.name"/>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="permissionDetail.desc"/>
    </el-form-item>
    <el-form-item label="url模板">
      <el-input v-model="permissionDetail.url"/>
    </el-form-item>
    <el-form-item label="请求方法">
      <el-select v-model="permissionDetail.method" placeholder="请求方法" class="handle-select mr10">
        <el-option key="1" label="GET" value="GET"></el-option>
        <el-option key="2" label="POST" value="POST"></el-option>
        <el-option key="3" label="PUT" value="PUT"></el-option>
        <el-option key="4" label="DELETE" value="DELETE"></el-option>
        <el-option key="5" label="ALL" value="ALL"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {nextTick, PropType, ref} from 'vue'
import {AutocompleteFetchSuggestionsCallback, ElAutocomplete, ElInput, ElMessage} from "element-plus";
import RoleInfo from "../../interface/RoleInfo";
import {getPermissionByNameApi} from "../../api/permission";
import PermissionInfo from "../../interface/PermissionInfo";

const props = defineProps({
  permissionDetail: {
    type: Object as PropType<PermissionInfo>,
    default: {
      name: "",
      desc: "",
      method: "GET",
      permissions: []
    }
  }
})

const emits = defineEmits(['submit', 'cancel'])

const onSubmit = () => {
  emits("submit")
}
const cancel = () => {
  emits("cancel")
}
</script>