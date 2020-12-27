/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserResolverServiceService } from './UserResolverService.service';

describe('Service: UserResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResolverServiceService]
    });
  });

  it('should ...', inject([UserResolverServiceService], (service: UserResolverServiceService) => {
    expect(service).toBeTruthy();
  }));
});
