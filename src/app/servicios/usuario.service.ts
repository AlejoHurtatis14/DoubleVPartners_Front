import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../modulos/config/interface-user';

interface ResponseSearch {
  incomplete_results: boolean,
  items: Array<User>,
  total_count: number
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.urlApi;
  private token = environment.tokenApi;

  constructor(
    private http: HttpClient
  ) { }

  searchUser(name: string) {
    return this.http.get<ResponseSearch>(`${this.url}search/users?q=${name}&per_page=10`);
  }

  getUser(user: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    const promise = new Promise<User>(async (resolve, reject) => {
      await this.http.get<User>(`${this.url}users/${user}`, { headers }).subscribe({
        next: (user: User) => {
          resolve(user);
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => { },
      });
    });
    return promise;
  }
}
