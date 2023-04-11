import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MSAL_INSTANCE, MsalBroadcastService, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';


function MsalInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId : 'ad20446e-04ed-4f3e-a616-d951af984bba',
      authority : 'https://login.microsoftonline.com/8f6bd982-92c3-4de0-985d-0e287c55e379',
      redirectUri : '/auth',
    }
  })
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : MSAL_INSTANCE,
      useFactory : MsalInstanceFactory
    },
    MsalService,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent , MsalRedirectComponent]
})
export class AppModule { }
