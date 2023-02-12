import { Component, Input, OnInit } from '@angular/core';
import { Follower } from 'src/app/models/follower';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent implements OnInit {
  @Input() nbrFollower: number;
  @Input() followers: Follower[];

  constructor() {}

  ngOnInit(): void {}
}
