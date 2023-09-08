<script setup lang="ts">

import useAdd from "./ts/useAdd";
import roledetail from "./roledetail.vue";
let {roleDetail,handleSubmit,cancel} = useAdd();

</script>

<template>
  <div>
    <roledetail @submit="handleSubmit" @cancel="cancel" :role-detail="roleDetail">

    </roledetail>
  </div>

</template>

<style scoped>

</style>