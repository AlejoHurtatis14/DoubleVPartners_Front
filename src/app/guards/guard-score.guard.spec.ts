import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GuardScoreGuard } from './guard-score.guard';

describe('GuardScoreGuard', () => {
  let guard: GuardScoreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    guard = TestBed.inject(GuardScoreGuard);
  });

  it('Guard creado correctamente', () => {
    expect(guard).toBeTruthy();
  });
});
