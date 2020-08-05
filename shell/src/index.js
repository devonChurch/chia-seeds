import { registerApplication, start } from 'single-spa';

registerApplication(
  'navigation-header',
  () => import('navigation/NavigationHeader'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'app-shell',
  () => import('fileLibrary/FileExplorer'),
  location => location.pathname.startsWith('/')

);

start();
