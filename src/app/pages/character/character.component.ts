// Angular
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// Services
import { JarvisService } from 'src/app/services/jarvis.service';
// Interfaces
import { Character } from 'src/app/interfaces/character.interface';
import { Comic } from 'src/app/interfaces/comic.interface';
// Components
import { GenericErrorDialogComponent } from 'src/app/components/dialogs/generic-error-dialog/generic-error-dialog.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character: Character;
  characterComics: Comic[];

  characterId: number;
  isMine: boolean;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly jarvisService: JarvisService,
    private readonly location: Location,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getParams();

    this.isMine = this.jarvisService.checkIsMine(this.characterId);

    this.jarvisService.getCharacterById(this.characterId).subscribe({
      next: (data) => {
        this.character = data;
      },
      error: (error) => {
        console.log(error);
        this.dialog.open(GenericErrorDialogComponent);
      },
    });

    this.jarvisService.getCharacterComics(this.characterId).subscribe({
      next: (data) => {
        this.characterComics = data;
      },
      error: (error) => {
        console.log(error);
        this.dialog.open(GenericErrorDialogComponent);
      },
    });
  }

  async getParams(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.characterId = parseInt(params['id']);
        resolve();
      });
    });
  }

  addCharacter(): void {
    if (this.jarvisService.checkLenght()) {
      let message =
        '¡Ups! ¡Tu equipo ya ha alcanzado el número máximo de héroes!';
      this.jarvisService.showToast(message);
    } else {
      this.jarvisService.addCharacter(this.character);
      this.isMine = true;
    }
  }

  deleteCharacter(): void {
    this.jarvisService.deleteCharacter(this.character);
    this.isMine = false;
  }

  buyComic(url: string): void {
    window.open(url, '_blank');
  }

  goBack(): void {
    this.location.back();
  }
}
