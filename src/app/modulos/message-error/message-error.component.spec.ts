import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageErrorComponent } from './message-error.component';
import { CommonModule } from '@angular/common';

describe('MessageErrorComponent', () => {
  let component: MessageErrorComponent;
  let fixture: ComponentFixture<MessageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageErrorComponent],
      imports: [CommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Existe propiedad message', () => {
    expect(component.message).toBeDefined();
  });
});
