// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

// App Imports
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./PageNotFound/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { LandingPageComponent } from "./LandingPage/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
