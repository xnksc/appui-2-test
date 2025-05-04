<template>
  <router-link class="link-btn" :to="to">{{ label }}</router-link>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.link-btn {
  font-weight: 600;
  color: #9df7d7;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #10b981;
  }
}
</style>
