import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Footer } from './components/footer/footer.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { Home } from './components/home/home.component';
import { ComponentOne } from './components/component-one/component-one.component';
import { ComponentTwo } from './components/component-two/component-two.component';

const appRoutes: Routes = [
    { path: '', component: Home },
    { path: 'component-one', component: ComponentOne },
    { path: 'component-two', component: ComponentTwo },
];

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    NavBar,
    Home,
    ComponentOne,
    ComponentTwo
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
