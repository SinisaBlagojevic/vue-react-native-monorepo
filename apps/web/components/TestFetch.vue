<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchData } from 'api-services'

const data = ref(null);

onMounted(async () => {
    data.value = await fetchData();
})
</script>
<template>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
</template>