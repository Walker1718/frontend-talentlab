import { TestBed } from '@angular/core/testing';

import { AuthMineGuard } from './auth-mine.guard';

describe('AuthMineGuard', () => {
  let guard: AuthMineGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthMineGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
