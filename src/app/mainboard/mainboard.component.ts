import { Component } from '@angular/core';
import {JobListComponent} from "../job-list/job-list.component";
// import {FriendListComponent} from "../friend-list/friend-list.component";
import {ProfileComponent} from "../profile/profile.component";
// import {InfoComponent} from "../info/info.component";

@Component({
  templateUrl: 'mainboard.component.html'
})
export class MainboardComponent {

  tab1Root = JobListComponent;
  // tab2Root = FriendListComponent;
  tab3Root = ProfileComponent;
  // tab4Root = InfoComponent;

  constructor() {

  }
}
