import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../../assets/Friend.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
@Input() frd: Friend;
  constructor() { }

  ngOnInit() {
  }

}
