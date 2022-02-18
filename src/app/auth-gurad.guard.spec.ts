import { TestBed } from '@angular/core/testing';

import { AuthGuradGuard } from './auth-gurad.guard';

describe('AuthGuradGuard', () => {
  let guard: AuthGuradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
