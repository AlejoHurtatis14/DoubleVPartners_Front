import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient
  ) { }

  searchUser(name: string) {
    return this.http.get<ResponseSearch>(`${this.url}search/users?q=${name}&per_page=10`);
  }

  getUser(user: string) {
    return this.http.get<User>(`${this.url}users/${user}`);
  }
}
