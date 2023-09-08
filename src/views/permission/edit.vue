<script setup lang="ts">

import useEdit from "./ts/useEdit";
import Detail from "./detail.vue";
let {permissionDetail,handleSubmit,cancel} = useEdit();

</script>

<template>
  <div>
    <detail @submit="handleSubmit" @cancel="cancel" :permission-detail="permissionDetail">

    </detail>
  </div>

</template>

<style scoped>

</style>