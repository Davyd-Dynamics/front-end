import { Component } from '@angular/core';
import {Contact} from "../../../../models/patient/contact";
import {Observable} from "rxjs";
import {AuthService} from "../../../../@core/services/auth/auth.service";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {
  user$: Observable<Contact> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.getProfile();
  }
}
