import { Application } from '@mcdis/app';
import { LayoutManagerModule, AppThemeModule, AppUIModule, AppI18nModule } from '@mcdis/app-ui-2';
import { MainModule } from './modules/MainModule';
import '@mcdis/app-ui-2/style.css';
import { RouterModule } from './modules/RouterModule';
import { HeaderModule } from './modules/HeaderModule';
import {
  StarterIconsModule,
  StarterPaletteModule,
  StarterTypographyModule,
  StarterElementsModule,
} from '@mcdis/app-ui-2-starter-kit';
const app = new Application();

app
  .use(new AppThemeModule())
  .use(new LayoutManagerModule())
  .use(new AppUIModule())
  .use(new MainModule())
  .use(new RouterModule())
  .use(new HeaderModule())
  .use(new AppI18nModule())
  .use(new StarterPaletteModule())
  .use(new StarterTypographyModule())
  .use(new StarterIconsModule())
  .use(new StarterElementsModule());
app.vueMountNode = '#app';
app.runAsync();
