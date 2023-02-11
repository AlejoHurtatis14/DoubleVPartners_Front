import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListUsersComponent } from './list-users.component';
import { CommonModule } from '@angular/common';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
      imports: [CommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Existe evento irPerfil', () => {
    expect(component.irPerfil).toBeDefined();
  });

  it('Existe propiedad messageError', () => {
    expect(component.messageError).toBeDefined();
  });

  it('Existe propiedad arrayUsers', () => {
    expect(component.arrayUsers).toBeDefined();
  });

  it('Existe función irUrlPerfil', () => {
    expect(component.irUrlPerfil).toBeTruthy();
  });
});
