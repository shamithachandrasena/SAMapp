import { Component, OnInit } from '@angular/core';
import { Friend } from '../Friend.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  friend : Friend = new Friend('shamitha', 23, 'shamithachandrasena@gmai.com', 'test');

  constructor() { }

  ngOnInit() {
  }

}
