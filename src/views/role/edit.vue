<script setup lang="ts">

import roledetail from "./roledetail.vue";
import useEdit from "./ts/useEdit";
let {roleDetail,handleSubmit,cancel} = useEdit();

</script>

<template>
  <div>
    <roledetail @submit="handleSubmit" @cancel="cancel" :role-detail="roleDetail">

    </roledetail>
  </div>

</template>

<style scoped>

</style>