import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css'],
})
export class BreadcrumComponent implements OnInit {
  paths = [
    { name: 'Accueil', url: '/home' },
    { name: 'Utilisateurs', url: '/users' },
    { name: 'Profil', url: '/profil' },
    { name: 'Statistiques', url: '/repository' },
  ];

  constructor(private route: Router) {
    // this.indexx =this.paths.findIndex(element =>  element.url === this.route.routerState.snapshot.url);
  }

  ngOnInit(): void {}
}
