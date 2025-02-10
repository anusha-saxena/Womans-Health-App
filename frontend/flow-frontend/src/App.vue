<script setup>
import { ref, onMounted } from "vue";
import API from "./api";
const message = ref("");
onMounted(async () => {
  try {
    const response = await API.get("/");
    message.value = response.data.message;
  } catch (error) {
    console.error("Error fetching data:", error);
    message.value = "Failed to fetch data from backend.";
  }
});
</script>
<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">{{ message }}</h1>
  </div>
</template>
<style scoped>
/* Add any styles if needed */
</style>
