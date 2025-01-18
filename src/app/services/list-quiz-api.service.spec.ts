import { TestBed } from '@angular/core/testing';

import { ListQuizApiService } from './list-quiz-api.service';

describe('ListQuizApiService', () => {
  let service: ListQuizApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListQuizApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
