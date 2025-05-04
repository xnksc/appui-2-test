<template>
  <div>
    <div v-if="users.length > 0" class="user-cards-grid">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
    <div v-else>
      <p>Загрузка списка пользователей...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { IUser } from '@/types/IUser';
import UserCard from '../components/UserCard.vue';
import { getUsersAsync } from '../services/UserService';

const users = ref<IUser[]>([]);

onMounted(async () => {
  try {
    users.value = await getUsersAsync();
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.user-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding: 16px;
}
</style>
