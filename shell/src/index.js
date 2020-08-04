import { registerApplication, start } from 'single-spa';

registerApplication(
  'file-library',
  () => import('fileLibrary/Explorer'),
  location => location.pathname.startsWith('/')
);

start();
