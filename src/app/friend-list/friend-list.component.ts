import { Component, OnInit } from '@angular/core';
import { Friend } from '../../assets/Friend.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  friends : Friend[]= [new Friend('shamitha', 23, 'shamithachandrasena@gmai.com', 'test'),
                        new Friend('nimasha', 24, 'nimasha@gmai.com', 'testingnimasha'),
                        new Friend('pavan', 23, 'nimasha@gmai.com', 'testingnimasha')
  ];

  constructor() { }

  ngOnInit() {
  }

}
