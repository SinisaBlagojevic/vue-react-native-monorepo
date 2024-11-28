<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchDummyData } from '@shared'

const data = ref(null);

onMounted(async () => {
    data.value = await fetchDummyData();
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