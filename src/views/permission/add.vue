<script setup lang="ts">

import useAdd from "./ts/useAdd";
import Detail from "./detail.vue";
let {permissionDetail,handleSubmit,cancel} = useAdd();

</script>

<template>
  <div>
    <detail @submit="handleSubmit" @cancel="cancel" :permission-detail="permissionDetail">

    </detail>
  </div>

</template>

<style scoped>

</style>