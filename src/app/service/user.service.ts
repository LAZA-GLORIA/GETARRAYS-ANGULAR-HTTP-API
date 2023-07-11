import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Il faut souscrire à ces Observables sinon rien ne va s'afficher
  // Notre observable ici va emettre (next) la réponse du serveur (les données venant du serveur)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users/1`);
  }
}
