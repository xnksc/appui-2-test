<template>
  <div v-if="user" class="sidebar-info">
    <div class="sidebar-info__content">
      <h3>{{ user.name }}</h3>
      <p><strong>Имя пользователя:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Телефон:</strong> {{ user.phone }}</p>
      <p><strong>Компания:</strong> {{ user.company.name }}</p>
      <router-link :to="'/users/' + user.id">Перейти к пользователю</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IUser } from '@/types/IUser';

const props = defineProps<{
  user: IUser | null;
}>();
</script>

<style scoped lang="scss">
.sidebar-info {
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 10px 0 0 0;
  width: 330px;
  background-color: #a7f3d0cf;
  border-top: 2px solid #999999;
  border-left: 2px solid #999999;
  padding: 20px;
  box-shadow: -5px 10px 10px 5px rgba(0, 0, 0, 0.151);
  z-index: 100;

  &.sidebar-info--open {
    transform: translateX(0);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    margin-top: 20px;
  }
}
</style>
