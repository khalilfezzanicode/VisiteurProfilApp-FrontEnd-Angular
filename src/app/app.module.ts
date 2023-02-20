import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { BarComponent } from './charts/bar/bar.component';
import { PieComponent } from './charts/pie/pie.component';
import { LineComponent } from './charts/line/line.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { FollowersPipe } from './pipes/followers.pipe';
import { RechercheComponent } from './components/navbar/recherche/recherche.component';
import { FollowersComponent } from './components/followers/followers.component';
import { UsersButtonComponent } from './components/users/users-button/users-button.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './ngrx/users.effects';
import { usersReducer } from './ngrx/users.reducer';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { RepositoriesComponent } from './components/profil/repositories/repositories.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProfilComponent,
    BreadcrumComponent,
    HomeComponent,
    BarComponent,
    PieComponent,
    LineComponent,
    RepositoryComponent,
    FollowersPipe,
    RechercheComponent,
    FollowersComponent,
    UsersButtonComponent,
    UsersListComponent,
    RepositoriesComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,

    EffectsModule.forRoot([UsersEffects]),
    StoreModule.forRoot({ registreState: usersReducer }),
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode if production
    }),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
