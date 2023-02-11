import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.urlApi;
  private _usuario: string = '';

  constructor(
    private http: HttpClient
  ) { }

  /* @required({ message: 'Ingrese un valor valido.' }) */
  public get usuario(): string {
    return this._usuario;
  }
  public set usuario(value: string) {
    this._usuario = value;
  }

  searchUser(name: string) {
    this.http.get(`${this.url}search/users?q=${name}`);
  }

  getUser(user: string) {
    this.http.get(`${this.url}users/${user}`);
  }
}
