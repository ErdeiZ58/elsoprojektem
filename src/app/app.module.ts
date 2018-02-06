import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import {AppRoutingModule} from './app-routing.module';
import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ...AppRoutingModule.routableComponents,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
