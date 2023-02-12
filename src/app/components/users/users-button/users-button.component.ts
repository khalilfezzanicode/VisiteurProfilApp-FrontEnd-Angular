import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllUsersAction } from 'src/app/ngrx/users.actions';

@Component({
  selector: 'app-users-button',
  templateUrl: './users-button.component.html',
  styleUrls: ['./users-button.component.css']
})
export class UsersButtonComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllUsers(){
    this.store.dispatch(new GetAllUsersAction({}))
  }

}
