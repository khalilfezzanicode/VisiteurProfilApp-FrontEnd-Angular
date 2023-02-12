import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Follower } from 'src/app/models/follower';
import { Repository } from 'src/app/models/repository';
import { User } from 'src/app/models/user';
import { UsersState, UsersStateEnum } from 'src/app/ngrx/users.reducer';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
 

   

  userProfil: User = new User();
  repositories: Repository[];
  followers: Follower[];

  userState$: Observable<UsersState> | null = null;
  readonly usersStateEnum: typeof UsersStateEnum = UsersStateEnum;
  nbrFollower: number;
  nbrRepositories: number;

  constructor(private store: Store<any>) {}

  getUsers() {
    this.userState$ = this.store.pipe(
      map((state) => {
        this.userProfil = state.registreState.user;
        this.followers = state.registreState.followers;
        this.repositories = state.registreState.repositories;
        this.nbrFollower=this.followers.length
        this.nbrRepositories=this.repositories.length
         console.log(state);
        return state.registreState;
      })
    );
  }

  ngOnInit(): void {
    this.getUsers();
  }

   
  /*ngOnDestroy(){

    //setTimeout is function callback like then() etc...
    setTimeout(() => {
      this.subscription.unsubscribe();
      console.log("component destroyed ! ")
      
    }, 2000);
     
  }*/
}
