import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { User } from '../config/interface-user';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  errorQuery: string = '';
  userCurrent!: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userSvc: UsuarioService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe({
      next: ({ login }) => {
        this.obtenerUsuario(login);
      },
      error: ({ error }) => {
        this.errorQuery = 'No se econtro parámetro en la url';
      }
    });
  }

  ngOnInit(): void { }

  obtenerUsuario(login: string) {
    this.userSvc.getUser(login).then((user: User) => {
      this.userCurrent = user;
    }).catch(({error}) => {
      this.errorQuery = (error && error.message ? error.message : 'No fue posible organizar obtener la información');
    });
  }

  regresar() {
    this.router.navigateByUrl('modulos');
  }

}
