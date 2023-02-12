import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import {
  GetAllFollowersActionError,
  GetAllFollowersActionSuccess,
  GetAllRepositoriesAction,
  GetAllRepositoriesActionError,
  GetAllRepositoriesActionSuccess,
  GetAllUsersActionError,
  GetAllUsersActionSuccess,
  GetProfilUserActionError,
  GetProfilUserActionSuccess,
  UsersActions,
  UsersActionsTypes,
} from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private userService: UsersService,
    private effectActions: Actions
  ) {}

  getAllUsersEffectSuccess: Observable<Action> = createEffect(() => {
    return this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_ALL_USERS),
      mergeMap((action) => {
        return this.userService.getAllUsers().pipe(
          map((users) => new GetAllUsersActionSuccess(users)),
          // un fois recu la response du backend : si error =>
          catchError((err) => of(new GetAllUsersActionError(err.message)))
        );
      })
    );
  });

  getProfilUserEffectSuccess: Observable<UsersActions> = createEffect(() => {
    return this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_PROFIL_USER),
      mergeMap((action: UsersActions) => {
        return this.userService.getUserByLogin(action.payload).pipe(
          map((user) => new GetProfilUserActionSuccess(user)),
          catchError((err) => of(new GetProfilUserActionError(err.message)))
        );
      })
    );
  });

  getFollowersEffectSuccess: Observable<UsersActions> = createEffect(() => {
    return this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_ALL_FOLLOWERS),
      mergeMap((action: UsersActions) => {
        return this.userService.getAllFollowersByLogin(action.payload).pipe(
          map((follower) => new GetAllFollowersActionSuccess(follower)),
          catchError((err) => of(new GetAllFollowersActionError(err.message)))
        );
      })
    );
  });

  getRepositoriesEffectSuccess: Observable<UsersActions> = createEffect(() => {
    return this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_ALL_REPOSITORIES),
      mergeMap((action: UsersActions) => {
        return this.userService.getReposByLogin(action.payload).pipe(
          map((repository) => new GetAllRepositoriesActionSuccess(repository)),
          catchError((err) =>
            of(new GetAllRepositoriesActionError(err.message))
          )
        );
      })
    );
  });
}
