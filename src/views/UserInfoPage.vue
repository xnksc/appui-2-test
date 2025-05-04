<template>
  <div v-if="rootNode">
    <h2 style="padding: 10px 5px; color: #003221; font-size: 24px">Инфо о пользователе</h2>
    <node-tree-expander :node="rootNode" />
  </div>
  <div v-else>
    <loader></loader>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { IUser } from '@/types/IUser';
import { getUserByIdAsync } from '@/services/UserService';
import { Loader, NodeTreeExpander } from '@mcdis/app-ui-2-starter-kit';
import type { ITreeNode } from '@mcdis/app-ui-2-starter-kit';

const route = useRoute();
const user = ref<IUser | null>(null);
const rootNode = ref<ITreeNode | null>(null);

onMounted(async () => {
  try {
    const id = Number(route.params.id);
    user.value = await getUserByIdAsync(id);

    if (user.value) {
      rootNode.value = convertUserToTree(user.value);
    }
  } catch (error) {
    console.error(error);
  }
});

function convertUserToTree(user: IUser): ITreeNode {
  return {
    title: `${user.name}`,
    children: [
      { title: `Логин: ${user.username}` },
      { title: `Email: ${user.email}` },
      { title: `Номер телефона: ${user.phone}` },
      { title: `Вебсайт: ${user.website}` },
      {
        title: 'Адрес',
        children: [
          { title: `Улица: ${user.address.street} ${user.address.suite}` },
          { title: `Город: ${user.address.city}` },
          { title: `Индекс: ${user.address.zipcode}` },
          {
            title: 'Геолокация',
            children: [{ title: `Lat: ${user.address.geo.lat}` }, { title: `Lng: ${user.address.geo.lng}` }],
          },
        ],
      },
      {
        title: 'Компания',
        children: [
          { title: `Название: ${user.company.name}` },
          { title: `Слоган: ${user.company.catchPhrase}` },
          { title: `BS: ${user.company.bs}` },
        ],
      },
    ],
  };
}
</script>

<style>
.node-text {
  font-size: 48px;
}

.node-header__title {
  font-size: var(--font-size-l) !important;
  padding: 10px 0;
}
</style>
