// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, map, Observable } from 'rxjs';
// Services
import { StorageService } from './storage.service';
// Interfaces
import { Comic } from '../interfaces/comic.interface';
import { Character } from '../interfaces/character.interface';
import { TeamInfo } from '../interfaces/team.interface';
import { MarvelResponse } from '../interfaces/marvel.interface';

@Injectable({
  providedIn: 'root',
})
export class JarvisService {
  private publicKey = '197ec015335383930e3be86c2a80d4ed';
  private privateKey = '77978dcb44a6bc776a716b7eab5d2a520668941c';

  private apiUrl = 'https://gateway.marvel.com/v1/public/';

  loading = new BehaviorSubject<boolean>(false);
  scrolled = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService,
    private readonly snackBar: MatSnackBar
  ) {}

  setLoading(state: boolean): void {
    this.loading.next(state);
  }

  onScroll(): void {
    this.scrolled.next(true);
  }

  showToast(message: string, duration?: number): void {
    this.snackBar.open(message, '', {
      duration: duration ? duration : 3000,
    });
  }

  getLandingCharacters(offset: number): Observable<Character[]> {
    const params = {
      apikey: this.publicKey,
      limit: '25',
      orderBy: 'modified',
      offset: offset,
      modifiedSince: '2015-01-01',
    };

    return this.http
      .get<MarvelResponse>(this.apiUrl + '/characters', {
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
      .get<MarvelResponse>(this.apiUrl + '/characters', {
        params: params,
      })
      .pipe(map((resp) => resp.data.results));
  }

  getCharacterById(characterId: number): Observable<Character> {
    const params = {
      apikey: this.publicKey,
    };

    return this.http
      .get<MarvelResponse>(this.apiUrl + '/characters/' + characterId, {
        params: params,
      })
      .pipe(map((resp) => resp.data.results[0]));
  }

  getCharacterComics(characterId: number): Observable<Comic[]> {
    const params = {
      apikey: this.publicKey,
    };

    return this.http
      .get<MarvelResponse>(
        this.apiUrl + '/characters/' + characterId + '/comics',
        {
          params: params,
        }
      )
      .pipe(map((resp) => resp.data.results));
  }

  getMyTeam(): Character[] {
    return this.storage.check('myTeam')
      ? this.storage.get('myTeam')
      : undefined;
  }

  getMyTeamInfo(): TeamInfo {
    return this.storage.check('myTeamInfo')
      ? this.storage.get('myTeamInfo')
      : undefined;
  }

  checkTeam(): boolean {
    return this.storage.check('myTeamInfo') ? true : false;
  }

  addCharacter(character: Character): void {
    let myTeam: Character[];
    if (this.storage.check('myTeam')) {
      myTeam = this.storage.get('myTeam');
      myTeam.push(character);
    } else {
      myTeam = [character];
    }
    this.storage.set('myTeam', myTeam);
  }

  deleteCharacter(character: Character): void {
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

  checkIsMine(characterId: number): boolean {
    if (this.storage.check('myTeam')) {
      return this.storage
        .get('myTeam')
        .find((teamCharacter: Character) => teamCharacter.id === characterId)
        ? true
        : false;
    } else {
      return false;
    }
  }

  checkLenght(): boolean {
    const myTeam: Character[] = this.storage.get('myTeam');
    return myTeam.length >= 6 ? true : false;
  }
}
