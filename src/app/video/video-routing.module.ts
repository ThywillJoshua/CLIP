import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');

const manageRoute = {
  path: 'manage',
  component: ManageComponent,
  data: {
    authOnly: true,
    authGuardPipe: redirectUnauthorizedToHome,
  },
  canActivate: [AngularFireAuthGuard],
};

const uploadRoute = {
  path: 'upload',
  component: UploadComponent,
  data: {
    authOnly: true,
    authGuardPipe: redirectUnauthorizedToHome,
  },
  canActivate: [AngularFireAuthGuard],
};

const routes: Routes = [manageRoute, uploadRoute];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
