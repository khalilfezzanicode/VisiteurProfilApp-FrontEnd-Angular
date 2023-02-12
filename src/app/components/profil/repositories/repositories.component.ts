import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { UsersState } from 'src/app/ngrx/users.reducer';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() nbrRepositories: number;
  @Input() repositories: Repository[];

  pageSize = 3; // number of items per page
  startIndex = 0; // starting index for slice pipe
  endIndex = this.pageSize; // ending index for slice pipe
  currentPage = 1; // current page number
 
  constructor() { }

  ngOnInit(): void {

   }

  previousPage() {
    if (this.startIndex >= this.pageSize) {
      this.startIndex -= this.pageSize;
      this.endIndex -= this.pageSize;
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.endIndex < this.nbrRepositories) {
      this.startIndex += this.pageSize;
      this.endIndex += this.pageSize;
      this.currentPage++;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.nbrRepositories / this.pageSize);
  }

}
