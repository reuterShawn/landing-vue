<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://form.jotform.com/jsform/262394695130057'
  document.body.appendChild(script)
})
</script>

<template>
  <div id="jotform-container"></div>
</template>   