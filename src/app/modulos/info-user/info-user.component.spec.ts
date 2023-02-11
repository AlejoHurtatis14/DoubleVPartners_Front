import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import { InfoUserComponent } from './info-user.component';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

describe('InfoUserComponent', () => {
  let component: InfoUserComponent;
  let fixture: ComponentFixture<InfoUserComponent>;
  let userService: UsuarioService;
  const userSvcSpy = jasmine.createSpyObj('UsuarioService', ['getUser']);
  let activatedRoute: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({
    login: 'test',
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InfoUserComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: paramsSubject },
        },
        { provide: UsuarioService, useValue: userSvcSpy }
      ]
    }).compileComponents();
    activatedRoute = TestBed.inject(ActivatedRoute);
    userService = TestBed.inject(UsuarioService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Existe propiedad errorQuery', () => {
    expect(component.errorQuery).toBeDefined();
  });

  it('Existe propiedad userCurrent', () => {
    expect(component.userCurrent).toBeUndefined();
  });

  it('Existe función regresar', () => {
    expect(component.regresar).toBeTruthy();
  });

  it('Existe función obtenerUsuario', () => {
    expect(component.obtenerUsuario).toBeTruthy();
  });
});
