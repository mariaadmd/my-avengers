import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { Comic } from 'src/app/interfaces/comic.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { Location } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(1600)]),
    ]),
  ],
})
export class CharacterComponent implements OnInit {
  characterId: number;
  character: Character;

  characterComics: Comic[];

  isMine: boolean;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly jarvisService: JarvisService,
    private readonly location: Location
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getParams();

    this.isMine = this.jarvisService.checkIsMine(this.characterId);

    this.jarvisService.getCharacterById(this.characterId).subscribe((data) => {
      console.log(data);
      this.character = data;
    });

    this.jarvisService
      .getCharacterComics(this.characterId)
      .subscribe((data) => {
        console.log(data);
        this.characterComics = data;
      });
  }

  async getParams(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.characterId = params['id'];
        resolve();
      });
    });
  }

  addCharacter() {
    this.jarvisService.addCharacter(this.character);
    this.isMine = true;
  }

  deleteCharacter() {
    this.jarvisService.deleteCharacter(this.character);
    this.isMine = false;
  }

  buyComic(url: string) {
    window.open(url, '_blank');
  }

  goBack() {
    this.location.back();
  }
}
