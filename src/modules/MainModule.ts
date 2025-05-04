import SidebarInfo from '@/components/SidebarInfo.vue';
import { Application, IAppModule, Log } from '@mcdis/app';
import { cachelessRouterViewElement, LayoutManager } from '@mcdis/app-ui-2';

export class MainModule implements IAppModule {
  name = 'main-module';

  start(_app: Application, _log: Log) {
    const layoutManager = _app.locate(LayoutManager);

    layoutManager.addLayout('Default').selectLayout('Default');

    const defaultLayout = layoutManager.getLayout('Default');

    defaultLayout
      .addGridRow('r-header', '56px')
      .addGridRow('r-content', '1fr')
      .addGridRow('r-end', '0')

      .addGridColumn('c-common', '1fr')
      .addGridColumn('c-end', '0');

    defaultLayout
      .addGridArea('content', 'r-content', 'c-common', 'r-end', 'c-end')
      .addGridArea('header', 'r-header', 'c-common', 'r-content', 'c-end')
      .addFloatingArea('userInfoArea', 'right', 'end', 'auto', 'auto');

    const { header, content } = {
      header: defaultLayout.getGridArea('header'),
      content: defaultLayout.getGridArea('content'),
    };
    const userInfoArea = defaultLayout.getFloatingArea('userInfoArea');

    content.add(cachelessRouterViewElement);

    header.setStyles({
      background: '#606060',
      padding: '10px',
    });

    content.setStyles({
      background: '#FDFDFD',
      padding: '0 10px',
    });

    userInfoArea
      .setStyles({
        background: '#FDFDFD',
        padding: '0 10px',
      })
      .disable();
  }
}
