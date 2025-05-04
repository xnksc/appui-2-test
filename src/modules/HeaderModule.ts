import { Application, IAppModule, Log } from '@mcdis/app';
import { AppElement, LayoutManager } from '@mcdis/app-ui-2';
import LinkButton from '../components/LinkButton.vue';

export class HeaderModule implements IAppModule {
  name = 'header-module';

  start(_app: Application, _log: Log) {
    const header = _app.locate(LayoutManager).getLayout('Default').getGridArea('header');

    header.setStyles({
      padding: '0 20px',
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      background: '#003221',
    });

    header
      .add(new AppElement(LinkButton), _x => {
        _x.setProps({
          label: 'Посты',
          to: '/posts',
        });
      })
      .add(new AppElement(LinkButton), _x => {
        _x.setProps({
          label: 'Пользователи',
          to: '/users',
        });
      });
  }
}
