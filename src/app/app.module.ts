import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.route';
import { HomeComponent } from './home/home.component';
// import { CursoModule } from './curso/curso.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    // CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
