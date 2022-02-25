import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class JarvisService {
  private publicKey = '197ec015335383930e3be86c2a80d4ed';
  private privateKey = '77978dcb44a6bc776a716b7eab5d2a520668941c';

  private apiUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService
  ) {}

  getLandingCharacters(): Observable<Character[]> {
    const params = {
      apikey: this.publicKey,
      limit: '50',
    };

    return this.http
      .get<any>(this.apiUrl + 'events/29/characters', {
        params: params,
      })
      .pipe(map((resp) => resp.data.results));
  }

  searchCharacter(characterName: string): Observable<Character[]> {
    const params = {
      apikey: this.publicKey,
      nameStartsWith: characterName,
    };

    return this.http
      .get<any>(this.apiUrl + '/characters', {
        params: params,
      })
      .pipe(map((resp) => resp.data.results));
  }

  getMyTeam(): Character[] {
    return this.storage.check('myTeam') ? this.storage.get('myTeam') : [];
  }

  addCharacter(character: any) {
    let myTeam: Character[];
    if (this.storage.check('myTeam')) {
      myTeam = this.storage.get('myTeam');
      myTeam.push(character);
    } else {
      myTeam = [character];
    }
    this.storage.set('myTeam', myTeam);
    console.log(myTeam);
  }

  deleteCharacter(character: any) {
    console.log('delete');

    let myTeam: Character[];

    if (this.storage.check('myTeam')) {
      myTeam = this.storage.get('myTeam');
      myTeam = myTeam.filter(
        (teamCharacter) => teamCharacter.id !== character.id
      );
    } else {
      myTeam = [character];
    }
    this.storage.set('myTeam', myTeam);
    console.log(myTeam);
  }
}
