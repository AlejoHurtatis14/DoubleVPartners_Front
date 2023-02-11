import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { User } from './config/interface-user';
import { Chart, ChartItem } from 'chart.js/auto'

type typeEvent = {
  login: string;
  score: number;
};

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  messageSearch: string = 'no';
  errorQuery: string = '';
  formSearch: FormGroup = new FormGroup({
    usuario: new FormControl(
      ''
      , [
        Validators.required,
        Validators.minLength(4),
        this.validateWord
      ]
    )
  });
  arrayUsers: Array<User> = [];
  chartView!: Chart;

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
    if (this.formSearch.valid) {
      this.errorQuery = '';
      this.userSvc.searchUser(this.formSearch.get('usuario')?.value).subscribe({
        next: ({ items }) => {
          this.messageSearch = ''
          this.arrayUsers = items;
          if (this.chartView) this.chartView.destroy();
          this.cargarGrafica();
        },
        error: ({ error }) => {
          this.errorQuery = (error && error.message ? error.message : 'No fue posible organizar obtener la información');
        }
      });
    } else {
      let errores = this.formSearch.controls['usuario'].errors;
      if (errores && errores['minlength']) {
        this.messageSearch = 'La búsqueda debe ser por mas de 4 letras';
      } else {
        this.messageSearch = errores && errores['usuario'] ? errores['usuario'] : 'El campo es obligatorio';
      }
      this.arrayUsers = [];
    }
  }

  irPerfil(datos: typeEvent) {
    localStorage.setItem('busqueda', this.formSearch.get('usuario')?.value);
    this.router.navigateByUrl(`modulos/perfil/${datos.login}/${datos.score}`);
  }

  validateWord(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && control.value.includes("doublevpartners")) {
      return { 'usuario': 'No se puede realizar la búsqueda' };
    }
    return null;
  }

  async cargarGrafica() {
    const data = [];
    for (let i = 0; i < this.arrayUsers.length; i++) {
      const it = this.arrayUsers[i];
      let random = this.generateRandom();
      let seguidores = 0;
      await this.userSvc.getUser(it.login).then((user: User) => {
        seguidores = user.followers;
      }).catch(({ error }) => {
        this.errorQuery = (error && error.message ? error.message : 'No fue posible organizar obtener la información');
      });
      data.push({
        title: it.login,
        followers: seguidores,
        color: `rgba(${random['one']}, ${random['two']}, ${random['three']}, 0.2)`
      });
    }

    this.chartView = new Chart(<ChartItem>document.getElementById('acquisitions'), {
      type: 'bar',
      data: {
        labels: data.map(row => row.title),
        datasets: [{
          label: 'Usuarios GitHub',
          data: data.map(row => row.followers),
          backgroundColor: data.map(row => row.color),
        }]
      }
    });
  }

  generateRandom() {
    return {
      'one': Math.floor(Math.random() * 255)
      , 'two': Math.floor(Math.random() * 255)
      , 'three': Math.floor(Math.random() * 255)
    }
  };
}
