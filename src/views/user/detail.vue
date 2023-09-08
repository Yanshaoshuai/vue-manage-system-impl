<template>
  <el-form :model="userDetail" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="userDetail.username"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="userDetail.password"/>
    </el-form-item>
    <div>
      <el-form-item label="角色">
        <el-tag
            v-for="tag in userDetail.roles"
            :key="tag.id"
            class="mx-1"
            closable
            :disable-transitions="false"
            @close="removeRole(tag.id)"
        >
          {{ tag.name }}
        </el-tag>
        <el-autocomplete class="inline-input" clearable
                         v-model="inputValue"
                         :fetch-suggestions="queryRoles"
                         :trigger-on-focus="true"
                         placeholder="请输入内容"
                         @select="handleSelect"
                         v-if="inputVisible"
                         ref="AutocompleteRef">
        </el-autocomplete>

        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
          + Add
        </el-button>
      </el-form-item>
    </div>

    <el-form-item label="是否激活">
      <el-switch v-model="userDetail.enabled"/>
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
import UserInfo from "../../interface/UserInfo";
import RoleInfo from "../../interface/RoleInfo";
import {getRolesByNameApi} from "../../api/role";

const props = defineProps({
  userDetail: {
    type: Object as PropType<UserInfo>,
    default: {
      username: "",
      password: "",
      roles: [],
      enabled: false
    }
  }
})

const emits = defineEmits(['submit','cancel'])
const removeRole = (id: number) => {
  props.userDetail.roles = props.userDetail.roles.filter(item => item.id !== id);
}
const inputValue = ref("");

const onSubmit = () => {
  emits("submit")
}
const cancel= () => {
  emits("cancel")
}
const AutocompleteRef = ref<InstanceType<typeof ElAutocomplete>>()
const queryRoles = (queryString: string, cb: AutocompleteFetchSuggestionsCallback) => {
  let roles:RoleInfo[] = [];
  let query = async () => {
    await getRolesByNameApi(queryString).then(res => {
      roles = res.data.data;
    });
    let result = roles.map(role => {
      return {"value": role.name, "id": role.id}
    });
    cb(result)
  };
  query();
}
const inputVisible = ref(false);
const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    AutocompleteRef.value!.inputRef!.focus();
  })
}
const handleSelect = (item: any) => {
  if (inputValue.value) {
    props.userDetail.roles.push({id: item.id, name: item.value})
  }
  inputVisible.value = false
  inputValue.value = '';
}

const handleBlur = () => {
  console.log("handleBlur")
  inputVisible.value = false
  inputValue.value = '';
}
</script>