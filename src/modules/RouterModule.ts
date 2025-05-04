import { Application, IAppModule, Log } from '@mcdis/app';
import { RouteRecordRaw } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import PostsPage from '../views/PostsPage.vue';
import UsersPage from '../views/UsersPage.vue';
import UserInfoPage from '@/views/UserInfoPage.vue';

export class RouterModule implements IAppModule {
  name = 'router-module';

  routes(_routes: Array<RouteRecordRaw>, _app: Application, _log: Log) {
    _routes.push(
      {
        path: '/',
        name: 'welcome-page',
        component: WelcomePage,
      },
      {
        path: '/users',
        name: 'users',
        component: UsersPage,
      },
      {
        path: '/users/:id',
        name: 'user-info',
        component: UserInfoPage,
        props: true,
      },
      {
        path: '/posts',
        name: 'posts',
        component: PostsPage,
      },
    );
  }
}
