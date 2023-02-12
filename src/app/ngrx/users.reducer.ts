import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { UsersActions, UsersActionsTypes } from './users.actions';
import { Repository } from 'src/app/models/repository';
import { Follower } from '../models/follower';

export enum UsersStateEnum {
  // differents states :
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface UsersState {
  users: User[];
  followers: Follower[];
  repositories: Repository[];
  user: User;
  errorMessage: string;
  dataState: UsersStateEnum;
}

//default value
const initState: UsersState = {
  users: [],
  followers: [],
  repositories: [],
  user: new User(),
  errorMessage: '',
  dataState: UsersStateEnum.INITIAL,
};

export function usersReducer(
  state: UsersState = initState,
  action: Action
): UsersState {
  //using type & paylaod

  switch (action.type) {
    // reducer for GetAllUsers Action
    case UsersActionsTypes.GET_ALL_USERS:
      return { ...state, dataState: UsersStateEnum.LOADING };

    case UsersActionsTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        dataState: UsersStateEnum.LOADED,
        users: (<UsersActions>action).payload,
      };

    case UsersActionsTypes.GET_ALL_USERS_ERROR:
      return {
        ...state,
        dataState: UsersStateEnum.ERROR,
        errorMessage: (<UsersActions>action).payload,
      };

    // reducer for GetProfilUser Action
    case UsersActionsTypes.GET_PROFIL_USER:
      return { ...state, dataState: UsersStateEnum.LOADING };

    case UsersActionsTypes.GET_PROFIL_USER_SUCCESS:
      return {
        ...state,
        dataState: UsersStateEnum.LOADED,
        user: (<UsersActions>action).payload,
      };

    case UsersActionsTypes.GET_PROFIL_USER_ERROR:
      return {
        ...state,
        dataState: UsersStateEnum.ERROR,
        errorMessage: (<UsersActions>action).payload,
      };

    // reducer for GetAllFollowers Action
    case UsersActionsTypes.GET_ALL_FOLLOWERS:
      return { ...state, dataState: UsersStateEnum.LOADING };

    case UsersActionsTypes.GET_ALL_FOLLOWERS_SUCCESS:
      return {
        ...state,
        dataState: UsersStateEnum.LOADED,
        followers: (<UsersActions>action).payload,
      };

    case UsersActionsTypes.GET_ALL_FOLLOWERS_ERROR:
      return {
        ...state,
        dataState: UsersStateEnum.ERROR,
        errorMessage: (<UsersActions>action).payload,
      };

    // reducer for GetAllRepositories Action
    case UsersActionsTypes.GET_ALL_REPOSITORIES:
      return { ...state, dataState: UsersStateEnum.LOADING };

    case UsersActionsTypes.GET_ALL_REPOSITORIES_SUCCESS:
      return {
        ...state,
        dataState: UsersStateEnum.LOADED,
        repositories: (<UsersActions>action).payload,
      };

    case UsersActionsTypes.GET_ALL_REPOSITORIES_ERROR:
      return {
        ...state,
        dataState: UsersStateEnum.ERROR,
        errorMessage: (<UsersActions>action).payload,
      };

    // action cases

    default:
      return { ...state };
  }
}
