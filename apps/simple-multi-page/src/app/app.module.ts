import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';

// Libs
import { RandomTextModule } from '@playground/random-text';

// Third party tools
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NgbModule.forRoot(),
    RandomTextModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
