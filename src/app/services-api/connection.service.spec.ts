import { TestBed } from '@angular/core/testing';

import { ConnectionService } from './connection.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ConnectionService = TestBed.get(ConnectionService);
    expect(service).toBeTruthy();
  });
});
