import { Component, OnInit } from '@angular/core';
import { RxFormGroup } from '@rxweb/reactive-form-validators';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  formSearch!: RxFormGroup;

  constructor(
    private userSvc: UsuarioService
  ) { }

  ngOnInit(): void {
  }

}
