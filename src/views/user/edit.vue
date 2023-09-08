<script setup lang="ts">

import Userdetail from "./userdetail.vue";
import useEdit from "./ts/useEdit";
let {userDetail,handleSubmit,cancel} = useEdit();

</script>

<template>
  <div>
    <userdetail @submit="handleSubmit" @cancel="cancel" :user-detail="userDetail">

    </userdetail>
  </div>

</template>

<style scoped>

</style>