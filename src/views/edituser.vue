<script setup lang="ts">

import Userdetail from "../components/userdetail.vue";
import {useUsersStore} from "../store/users";
import {useRoute, useRouter} from "vue-router";
import {getUserDetailByIdApi, updateByIdApi} from "../api";
import {ElMessage} from "element-plus";
import UserInfo from "../interface/UserInfo";
import {onMounted, ref} from "vue";
onMounted(() => {
  getUserDetail();
})
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
let route = useRoute();
const cancel = () => {
  router.go(-1);
}
const getUserDetail = async () => {
  const updateId: number = Number(route.params.id);
  await getUserDetailByIdApi(updateId).then(res => {
    userDetail.value = res.data.data;
    console.log(userDetail.value.roles)
  })
}
function updateUser() {
  usersStore.updateById(userDetail.value)
  updateByIdApi(userDetail.value).then(res => {
    console.log(res.data.data)
  });
  ElMessage.success('修改成功');
  router.go(-1);
}

const handleSubmit = () => {
  updateUser()
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