<script setup lang="ts">

import Userdetail from "../../components/userdetail.vue";
import useAdd from "./ts/useAdd";
let {userDetail,handleSubmit,cancel} = useAdd();

</script>

<template>
  <div>
    <userdetail @submit="handleSubmit" @cancel="cancel" :user-detail="userDetail">

    </userdetail>
  </div>

</template>

<style scoped>

</style>