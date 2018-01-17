import { Component } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.css']
})

export class AppComponent {

  hideNav = false;

  /**
   * Contains the background colors of all the features listed in the sidenav.
   */
  sideNavBackground = {
    account: 'black',
    brewery: 'black',
    brews: 'black',
    payment: 'black',
    signout: 'black'
  };

  sideNavNavigation ={
    account: false,
    brewery: false,
    brews: false,
    payment: false
  };

  constructor(router:Router) {
    router.events.subscribe((event) => {
      const LANDING_SLASH: string = '/landing';
      const ALT_LANDING: string = '/';
      if (event instanceof NavigationStart) {
        if (event.url === LANDING_SLASH) {
          this.hideNav = true;
        }
        else if (event.url === ALT_LANDING) {
          this.hideNav = true;
        }
        else if (event.url === '/dashboard') {
          this.hideNav = true;
        }
        else if (event.url === '/account') {
          this.sideNavBackgroundColor(0);
          this.hideNav = false;
          this.sideNavNavigation.account = true;
          this.sideNavNavigation.brewery = false;
          this.sideNavNavigation.brews = false;
          this.sideNavNavigation.payment = false;
        }
        else if (event.url === '/brewery') {
          this.sideNavBackgroundColor(1);
          this.hideNav = false;
          this.sideNavNavigation.account = false;
          this.sideNavNavigation.brewery = true;
          this.sideNavNavigation.brews = false;
          this.sideNavNavigation.payment = false;
        }
        else if (event.url === '/brews') {
          this.sideNavBackgroundColor(2);
          this.hideNav = false;
          this.sideNavNavigation.account = false;
          this.sideNavNavigation.brewery = false;
          this.sideNavNavigation.brews = true;
          this.sideNavNavigation.payment = false;
        }
        else if (event.url === '/payment') {
          this.sideNavBackgroundColor(3);
          this.hideNav = false;
          this.sideNavNavigation.account = false;
          this.sideNavNavigation.brewery = false;
          this.sideNavNavigation.brews = false;
          this.sideNavNavigation.payment = true;
        }
      }
    });
  }

  /**
   * This function sets the background color of the feature in use as orange and all the other features as black by calling
   * this.setBackgroundColorExcept('Feature Being Used Here').
   *
   * @param {number} index The index should be as follows:
   * > 0 => account
   * > 1 => brewery
   * > 2 => brews
   * > 3 => payment
   *
   */
  sideNavBackgroundColor(index:number) {
    switch (index) {
      case 0:
        this.sideNavBackground.account = '#f85200';
        this.setBlackBackgroundColorExcept('account');
        break;
      case 1:
        this.sideNavBackground.brewery = '#f85200';
        this.setBlackBackgroundColorExcept('brewery');
        break;
      case 2:
        this.sideNavBackground.brews = '#f85200';
        this.setBlackBackgroundColorExcept('brews');
        break;
      case 3:
        this.sideNavBackground.payment = '#f85200';
        this.setBlackBackgroundColorExcept('payment');
        break;
    }
  }

  /**
   * This function changes all the background colors of the features listed in the sidenav to be black, expect for the one
   * feature passed in as an argument.
   * @param {string} text The feature to not be set to a black background.
   */
  setBlackBackgroundColorExcept(text:string) {
    for(let key in this.sideNavBackground) {
      if(key !== text) {
        this.sideNavBackground[key] = 'black';
      }
    }
  }

}
