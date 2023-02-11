import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService]
    });
    service = TestBed.inject(UsuarioService);
  });

  it('Creado Correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Existe propiedad url', () => {
    expect(service['url']).toBeDefined();
  });

  it('Existe propiedad token', () => {
    expect(service['token']).toBeDefined();
  });

  it('Existe función getUser', () => {
    expect(service.getUser).toBeTruthy();
  });

  it('Existe función getUser', () => {
    expect(service.getUser).toBeTruthy();
  });
});
