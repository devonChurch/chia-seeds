import { registerApplication, start } from 'single-spa';

registerApplication(
  'navigation-header',
  () => import('navigation/NavigationHeader'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'file-library-file-explorer',
  () => import('fileLibrary/FileExplorer'),
  location => location.pathname.startsWith('/library')

);

registerApplication(
  'dashboard-landing-page',
  () => import('dashboard/LandingPage'),
  location => location.pathname === '/'

);

start();
