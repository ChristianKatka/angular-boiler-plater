import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';


import { NotFoundPageContainer } from './not-found-page/not-found-page.container';
import { HomeContainer } from "./home/home.container";

const components = [AppComponent, NotFoundPageContainer, HomeContainer];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreDevtoolsModule,
    // StoreModule.forRoot(rootReducers)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
