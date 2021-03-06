import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClipService } from './services/clip.service';

const homeRoute = {
  path: '',
  component: HomeComponent,
};

const aboutRoute = {
  path: 'about',
  component: AboutComponent,
};

const clipRoute = {
  path: 'clip/:id',
  component: ClipComponent,
  resolve: {
    clip: ClipService,
  },
};

const lazyRoutes = {
  path: '',
  loadChildren: async () => (await import('./video/video.module')).VideoModule,
};

const notFoundRoute = {
  path: '**',
  component: NotFoundComponent,
};

const routes: Routes = [
  homeRoute,
  aboutRoute,
  clipRoute,
  lazyRoutes,
  notFoundRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
