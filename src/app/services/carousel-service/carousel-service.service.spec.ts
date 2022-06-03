import { TestBed } from '@angular/core/testing';

import { CarouselServiceService } from './carousel-service.service';

describe('CarouselServiceService', () => {
  let service: CarouselServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
