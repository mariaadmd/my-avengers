import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  check(key: string): boolean {
    if (localStorage.getItem(key)) {
      return true;
    } else {
      return false;
    }
  }

  get(key: string): any {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key)!);
    } else {
      return false;
    }
  }

  set(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
