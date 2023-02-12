import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { UsersState } from 'src/app/ngrx/users.reducer';
import {
  GetAllFollowersAction,
  GetAllRepositoriesAction,
  GetProfilUserAction,
  GetProfilUserActionError,
} from './../../../ngrx/users.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input() state: UsersState | null = null;

  pageSize = 3; // number of items per page
  startIndex = 0; // starting index for slice pipe
  endIndex = this.pageSize; // ending index for slice pipe
  currentPage = 1; // current page number

  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  onViewProfile(login: any) {
    this.store.dispatch(new GetProfilUserAction(login));
    this.store.dispatch(new GetAllFollowersAction(login));
    this.store.dispatch(new GetAllRepositoriesAction(login));
  }

  previousPage() {
    if (this.startIndex >= this.pageSize) {
      this.startIndex -= this.pageSize;
      this.endIndex -= this.pageSize;
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.endIndex < this.state.users.length) {
      this.startIndex += this.pageSize;
      this.endIndex += this.pageSize;
      this.currentPage++;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.state.users.length / this.pageSize);
  }
}
