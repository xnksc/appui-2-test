<template>
  <div v-if="posts.length > 0">
    <app-input v-model="inputCity" style="margin: 20px 0" width="250px" placeholder="Поиск по городу" />
    <table-list
      style="cursor: pointer"
      @rowClick="onRowClick"
      :definition="tableListDefinition"
      :data="filteredPosts"
      v-if="filteredPosts.length > 0"
      header-background
      rows-color-alternation
      select-row-on-click
    >
    </table-list>
    <p style="margin: 10px; text-align: center">Нет постов по данному городу</p>
  </div>
  <div v-else>
    <loader></loader>
  </div>
</template>
<script setup lang="ts">
import { defineTableColumns, Loader, TableList, AppInput } from '@mcdis/app-ui-2-starter-kit';
import { ref, onMounted, computed } from 'vue';
import { getPostsAsync } from '../services/PostService';
import { getUsersAsync } from '../services/UserService';
import { IPost } from '../types/IPost';
import { IUser } from '../types/IUser';
import SidebarInfo from '@/components/SidebarInfo.vue';
import { AppElement, GridAreaManager, useAppUiComponent } from '@mcdis/app-ui-2';

const posts = ref<IPost[]>([]);
const users = ref<IUser[]>([]);

const selectedPost = ref<IPost | null>(null);
const isSidebarOpen = ref(false);

const { uiSection } = useAppUiComponent();

const inputCity = ref('');
const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const user = users.value.find(u => u.id === post.userId);
    return !inputCity.value || user?.address.city.toLowerCase().includes(inputCity.value.toLowerCase());
  });
});

const selectedUser = computed(() => {
  if (selectedPost.value) {
    return users.value.find(user => user.id === selectedPost.value?.userId) || null;
  }
  return null;
});
const tableListDefinition = defineTableColumns<IPost>()
  .addTagColumn(_config => {
    _config.setField('id').setLabel('ID Поста').setSortable();
  })
  .addTextColumn(_config => {
    _config.setField('userName').setLabel('Имя пользователя').setSortable();
  })
  .addTextColumn(_config => {
    _config.setField('title').setLabel('Название');
  })
  .addTextColumn(_config => {
    _config.setField('body').setLabel('Текст').setSearchable();
  });

const userInfoArea: GridAreaManager = uiSection.area('userInfoArea');

function onRowClick(row: IPost) {
  if (selectedPost.value?.id === row.id) {
    closeSidebar();
    userInfoArea.area.disable('right');
  } else {
    selectedPost.value = row;
    userInfoArea.area.enable('right');
    isSidebarOpen.value = true;
  }
}

userInfoArea.add(new AppElement(SidebarInfo), _x => {
  _x.setProps({
    user: selectedUser,
  });
});
function closeSidebar() {
  selectedPost.value = null;
}
onMounted(async () => {
  try {
    const [usersData, postsData] = await Promise.all([getUsersAsync(), getPostsAsync()]);

    users.value = usersData;
    posts.value = postsData.map(post => {
      const user = users.value.find(us => us.id === post.userId);
      return {
        ...post,
        userName: user ? user.name : post.userId,
      };
    });
  } catch (error) {
    console.error(error);
  }
});
</script>
