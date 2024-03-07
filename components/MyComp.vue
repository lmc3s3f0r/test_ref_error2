<template>
  <div>{{ label }}</div>
</template>

<script setup lang="ts">
interface MyCompProps {
  label: string;
}
const { label } = defineProps<MyCompProps>();
</script>

<style></style>
