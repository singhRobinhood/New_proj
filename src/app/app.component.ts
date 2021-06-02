import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vaccine-mgmt';

  constructor(public authenticationService: AuthenticationService) {

  }
  
  logout() {
    this.authenticationService.logout();
  }
}
