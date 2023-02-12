import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetProfilUserAction } from 'src/app/ngrx/users.actions';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
})
export class RechercheComponent implements OnInit {
  @Input() loginSearch: string;

  constructor(private router: Router, private store: Store<any>) {}

  ngOnInit(): void {}

  onSearch() {
    if (this.loginSearch !== undefined && this.loginSearch != '') {
      this.store.dispatch(new GetProfilUserAction(this.loginSearch));

      this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
        this.router.navigate(['/profil/' + this.loginSearch]);
      });
    } else {
      this.router.navigate([this.router.url]).catch((error) => {
        console.error('Error Occured : ', error);
      });
    }
  }

  reset() {
    this.loginSearch = '';
  }
}
