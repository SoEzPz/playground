// Core
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';

// This Module
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FormComponent } from './form/form.component';

// Local Libs
import { RandomTextModule } from '@playground/random-text';

// Third party tools
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';

const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    NgbModule.forRoot(),
    RandomTextModule
  ],
  providers: [
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PicturesComponent,
    FormComponent,
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
