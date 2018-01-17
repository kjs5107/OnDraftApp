/**
 * Created by kylescagnelli on 1/3/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./PageNotFound/page-not-found.component";
import { LandingPageComponent } from "./LandingPage/landing-page.component";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { AccountComponent } from "./Account/account.component";
import { BreweryComponent } from "./Brewery/brewery.component";
import { BrewsComponent } from "./Brews/brews.component";
import { PaymentComponent } from "./Payment/payment.component";

/**
 * Defines the url paths for all the features in OnDraftApp, with their components attached.
 * > Note: *IMPORTANT: ALWAYS LEAVE THE WILDCARD PATH ** AS THE LAST PATH DEFINED IN THIS LIST*
 */
const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  // TODO: set up angular guards for all features besides landing page.
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent },
  { path: 'brewery', component: BreweryComponent },
  { path: 'brews', component: BrewsComponent },
  { path: 'payment', component: PaymentComponent },
  // IMPORTANT: You must leave the following wildcard path as the last path no matter what. You've been warned.
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
