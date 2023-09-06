<script setup lang="ts">

import Userdetail from "../components/userdetail.vue";
import {useUsersStore} from "../store/users";
import {useRoute, useRouter} from "vue-router";
import {addUserApi, getUserDetailByIdApi, updateByIdApi} from "../api";
import {ElMessage} from "element-plus";
import UserInfo from "../interface/UserInfo";
import {ref} from "vue";

let userDetail = ref<UserInfo>(
    {
      username: "",
      password: "",
      roles: [],
      enabled: false
    }
)
let usersStore = useUsersStore();
let router = useRouter();
const cancel = () => {
  router.go(-1);
}

function addUser() {
  userDetail.value.id = null
  addUserApi(userDetail.value).then(res => {
    console.log(res.data.data)
    usersStore.addUser(userDetail.value)
  });
  ElMessage.success('添加成功');
  router.go(-1);
}

const handleSubmit = () => {
  addUser()
}
</script>

<template>
  <div>
    <userdetail @submit="handleSubmit" @cancel="cancel" :user-detail="userDetail">

    </userdetail>
  </div>

</template>

<style scoped>

</style>