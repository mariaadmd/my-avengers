import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JarvisService {
  private publicKey = '197ec015335383930e3be86c2a80d4ed';
  private privateKey = '77978dcb44a6bc776a716b7eab5d2a520668941c';

  constructor(private readonly http: HttpClient) {}
}
