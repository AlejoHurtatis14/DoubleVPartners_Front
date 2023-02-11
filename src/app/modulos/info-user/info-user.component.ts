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
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
  }

  obtenerUsuario(login: string) {
    this.userSvc.getUser(login).subscribe({
      next: (user: User) => {
        this.userCurrent = user;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  regresar() {
    this.router.navigateByUrl('modulos');
  }

}
