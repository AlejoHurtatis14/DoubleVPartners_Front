import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { ListUsersModule } from './list-users/list-users.module';
import { MessageErrorModule } from './message-error/message-error.module';
import { ModulosRoutingModule } from './modulos-routing.module';

import { ModulosComponent } from './modulos.component';

describe('ModulosComponent', () => {
  let component: ModulosComponent;
  let fixture: ComponentFixture<ModulosComponent>;
  let userService: jasmine.SpyObj<UsuarioService>;
  let el: DebugElement;

  const retorno = {
    incomplete_results: false,
    items: [],
    total_count: 0
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModulosComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        ModulosRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ListUsersModule,
        MessageErrorModule,
      ]
    }).compileComponents();
    userService = jasmine.createSpyObj('UsuarioService', ['searchUser']);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Existe propiedad messageSearch', () => {
    expect(component.messageSearch).toBeDefined();
  });

  it('Existe propiedad errorQuery', () => {
    expect(component.errorQuery).toBeDefined();
  });

  it('Existe propiedad arrayUsers', () => {
    expect(component.arrayUsers).toBeDefined();
  });

  it('Existe propiedad message', () => {
    expect(component.chartView).toBeUndefined();
  });

  describe('llamada metodo UsuarioService.searchUser()', () => {
    it('input search and presiona boton buscar', () => {
      const input = el.query(By.css('input')).nativeElement;
      input.value = 'login';
      const button = el.query(By.css('button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges;
      fixture.whenStable().then(() => {
        userService.searchUser.and.returnValue(of(retorno));
        expect(component.search()).toHaveBeenCalled();
      });
    });

    it('llamamos metodo search()', () => {
      fixture.whenStable().then(() => {
        userService.searchUser.and.returnValue(of(retorno));
        expect(component.search()).toHaveBeenCalled();
      });
    });
  });
});
