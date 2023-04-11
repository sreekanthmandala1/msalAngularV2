import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MsalRedirectComponent } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: 'profile' , component : ProfileComponent
  },
  {
    path: 'auth' , component : MsalRedirectComponent
  },
  {
    path : '' , component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
