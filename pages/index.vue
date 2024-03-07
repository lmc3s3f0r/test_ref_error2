<template>
  <div>
    <MyComp :label="data.label" />
  </div>
</template>

<script setup lang="ts">
import MyComp from "~/components/MyComp.vue";
import { useData } from "~/composables/useData";

const { getCurrentData } = useData();

const data = getCurrentData();
</script>

<style></style>
