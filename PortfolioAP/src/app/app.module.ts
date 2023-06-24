import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { LogoAPComponent } from './portfolio/logo-ap/logo-ap.component';
import { RedesComponent } from './portfolio/redes/redes.component';
import { BannerComponent } from './portfolio/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
