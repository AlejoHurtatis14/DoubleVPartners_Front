import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { User } from './config/interface-user';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  formSearch: FormGroup = new FormGroup({
    usuario: new FormControl('', [])
  });
  arrayUsers: Array<User> = [];

  constructor(
    private userSvc: UsuarioService,
    private router: Router
  ) {
    let busqueda = localStorage.getItem('busqueda');
    if (busqueda) {
      this.formSearch.get('usuario')?.setValue(busqueda);
      localStorage.removeItem('busqueda')
      this.search();
    }
  }

  ngOnInit(): void { }

  search() {
    console.log(this.formSearch);
    if (this.formSearch.valid) {
      this.userSvc.searchUser(this.formSearch.get('usuario')?.value).subscribe({
        next: ({ items }) => {
          console.log(items)
          this.arrayUsers = items;
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      console.log(this.formSearch);
    }
  }

  irPerfil(login: string) {
    localStorage.setItem('busqueda', this.formSearch.get('usuario')?.value);
    this.router.navigateByUrl('modulos/perfil/' + login);
  }

}
