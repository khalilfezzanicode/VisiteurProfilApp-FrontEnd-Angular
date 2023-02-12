import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  subscription: Subscription;

  constructor(private store: Store<any>) {}

  usersState$: Observable<UsersState> | null = null;

  readonly usersStateEnum: typeof UsersStateEnum = UsersStateEnum;

  getUsers() {
    this.usersState$ = this.store.pipe(
      map((state) => {
        //tate.registreState.users;
        console.log(state);
        return state.registreState;
      })
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }

  /* 
  ngOnDestroy(){

     setTimeout(() => {
      this.subscription.unsubscribe();
      console.log("component destroyed ! ")
      
    }, 2000);
     
  }*/
}
