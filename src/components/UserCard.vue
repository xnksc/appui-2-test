<template>
  <div class="user-card" @click="goToUserInfo">
    <h3>{{ user.name }}</h3>
    <p><strong>Логин:</strong> {{ user.username }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Номер телефона:</strong> {{ user.phone }}</p>
    <p><strong>Компания:</strong> {{ user.company.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { IUser } from '../types/IUser';

const props = defineProps<{
  user: IUser;
}>();

const router = useRouter();

function goToUserInfo() {
  router.push(`/users/${props.user.id}`);
}
</script>

<style scoped lang="scss">
.user-card {
  border: 1px solid #1cb582;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #befbe597;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
  }
}
</style>
