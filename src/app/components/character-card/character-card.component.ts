import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character;

  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter();

  isMine: boolean;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isMine = this.jarvisService.checkIsMine(this.character.id);
  }

  addCharacter(): void {
    if (this.jarvisService.checkLenght()) {
      this.snackBar.open(
        'Ups! Tu equipo ya a alcanzado el maximo de heroes!',
        '',
        {
          duration: 3000,
        }
      );
    } else {
      this.jarvisService.addCharacter(this.character);
      this.isMine = true;
    }
  }

  deleteCharacter(): void {
    this.jarvisService.deleteCharacter(this.character);
    this.deleteEmitter.emit(this.character.id);
    this.isMine = false;
  }
  goToCharacterDetail() {
    this.router.navigate(['/character', this.character.id]);
  }
}
