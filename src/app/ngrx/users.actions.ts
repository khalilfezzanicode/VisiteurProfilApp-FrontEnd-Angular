import { Action } from '@ngrx/store';
import { Follower } from '../models/follower';
import { User } from '../models/user';

export enum UsersActionsTypes {
  GET_ALL_USERS = 'Get All Users',
  GET_ALL_USERS_SUCCESS = 'Get All Users Success',
  GET_ALL_USERS_ERROR = 'Get All Users Error',

  GET_PROFIL_USER = 'Get Profil User',
  GET_PROFIL_USER_SUCCESS = 'Get Profil User Success',
  GET_PROFIL_USER_ERROR = 'Get Profil User Error',

  GET_ALL_FOLLOWERS = 'Get All Followers',
  GET_ALL_FOLLOWERS_SUCCESS = 'Get All Followers Success',
  GET_ALL_FOLLOWERS_ERROR = 'Get All Followers Error',

  GET_ALL_REPOSITORIES = 'Get All Repositories',
  GET_ALL_REPOSITORIES_SUCCESS = 'Get All Repositories Success',
  GET_ALL_REPOSITORIES_ERROR = 'Get All Repositories Error',
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export class GetAllUsersAction implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS;
  constructor(public payload: any) {}
}

export class GetAllUsersActionSuccess implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetAllUsersActionError implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_USERS_ERROR;
  constructor(public payload: string) {}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export class GetProfilUserAction implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_PROFIL_USER;
  constructor(public payload: string) {}
}

export class GetProfilUserActionSuccess implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_PROFIL_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class GetProfilUserActionError implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_PROFIL_USER_ERROR;
  constructor(public payload: string) {}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export class GetAllFollowersAction implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_FOLLOWERS;
  constructor(public payload: any) {}
}

export class GetAllFollowersActionSuccess implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_FOLLOWERS_SUCCESS;
  constructor(public payload: Follower[]) {}
}

export class GetAllFollowersActionError implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_FOLLOWERS_ERROR;
  constructor(public payload: string) {}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export class GetAllRepositoriesAction implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_REPOSITORIES;
  constructor(public payload: any) {}
}

export class GetAllRepositoriesActionSuccess implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_REPOSITORIES_SUCCESS;
  constructor(public payload: Follower[]) {}
}

export class GetAllRepositoriesActionError implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_ALL_REPOSITORIES_ERROR;
  constructor(public payload: string) {}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export type UsersActions =
  | GetAllUsersAction
  | GetAllUsersActionSuccess
  | GetAllUsersActionError
  | GetProfilUserAction
  | GetProfilUserActionSuccess
  | GetProfilUserActionError
  | GetAllFollowersAction
  | GetAllFollowersActionSuccess
  | GetAllFollowersActionError
  | GetAllRepositoriesAction
  | GetAllRepositoriesActionSuccess
  | GetAllRepositoriesActionError;
