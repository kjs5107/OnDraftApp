// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

// App Imports
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./PageNotFound/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { LandingPageComponent } from "./LandingPage/landing-page.component";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { AccountComponent } from "./Account/account.component";
import { BreweryComponent } from "./Brewery/brewery.component";
import { BrewsComponent } from "./Brews/brews.component";
import { PaymentComponent } from "./Payment/payment.component";
import { CreateEditBrewsService } from "./CreateOrEditBrews/create-edit-brews.service";
import { CreateEditBrewsComponent } from "./CreateOrEditBrews/create-edit-brews.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    DashboardComponent,
    AccountComponent,
    BreweryComponent,
    BrewsComponent,
    CreateEditBrewsComponent,
    PaymentComponent
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
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [CreateEditBrewsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
