import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'mantenance',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4101/remoteEntry.js',
        exposedModule: './routes',
      }).then((c) => c.routes),
  },
  {
    path: '**',
    redirectTo: 'mantenance',
    pathMatch: 'full',
  },
];
