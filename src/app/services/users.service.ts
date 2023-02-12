import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
 import { Repository } from '../models/repository';
import { Commit } from '../models/commit';
import { Issue } from '../models/issue';
import { Pull } from './../models/pull';
import { Follower } from './../models/follower';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
 urlUsers: string = 'https://api.github.com/users';
 urlRepos: string = 'https://api.github.com/repos';

 
public getAllUsers():Observable<User[]>{
  return this.http.get<User[]>(this.urlUsers) 
}


public getAllFollowersByLogin(username : string): Observable<Follower[]>{
  return this.http.get<Follower[]>(this.urlUsers+'/'+username+'/followers') 
}

public getReposByLogin(username : string): Observable<Repository[]>{
 return this.http.get<Repository[]>(this.urlUsers+'/'+username+'/repos') 
}


public getUserByLogin(username : string) : Observable<User>{
 return this.http.get<User>(this.urlUsers+'/'+username) 
}

public getRepositoryByLoginAndName(userName:string , name : string) : Observable<Repository>{
  return this.http.get<Repository>(this.urlRepos+'/'+userName+'/'+name) 
} 
    
public getRepositoryCommits(userName:string , name : string) : Observable<Commit[]>{
  return this.http.get<Commit[]>(this.urlRepos+'/'+userName+'/'+name+'/commits')
}

public getRepositoryIssues(userName:string , name : string) : Observable<Issue[]>{
  return this.http.get<Issue[]>(this.urlRepos+'/'+userName+'/'+name+'/issues')
}

public getRepositoryPulls(userName:string , name : string) : Observable<Pull[]>{
  return this.http.get<Pull[]>(this.urlRepos+'/'+userName+'/'+name+'/pulls')
}




 




 
}