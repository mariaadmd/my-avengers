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

  get(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key)!);
    } else {
      return false;
    }
  }

  set(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
